import { DeleteForever, Edit } from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { PostPreview } from "src/models";
import { Buttons } from "src/styled-components/buttons.styled.components";
import { deletePost, getListPost } from "./services";
import { ButtonsActions } from "./styled-components";

export default function PostTable() {
	const pageSize = 5
	const rowPerPage = 5
	const [post, setPost] = useState<PostPreview[]>([])

	const getPost = async () => {
		const result = await getListPost()
		setPost(result)
	}

	useEffect(() => {
		getPost()
	}, [])

	function handleDelete(id: number) {
		return deletePost(id).then(() => setPost(post => post.filter(item => item.id !== id))).catch(() => console.error("Error to delete"))
	}

	const columns: GridColDef[] = useMemo(() => [
		{ field: 'id', headerName: 'ID', width: 100 },
		{ field: 'userId', headerName: 'User ID', width: 100 },
		{ field: 'body', headerName: 'Cuerpo', minWidth: 130, flex: 1 },
		{ field: 'title', headerName: 'Titulo', type: 'number', minWidth: 130, flex: 1 },
		{
			field: 'actions', headerName: 'Acciones', type: 'actions', sortable: false, width: 150,
			renderCell: (items: GridRenderCellParams) => (
				<ButtonsActions>
					<Buttons variant="edit" onClick={() => console.log(items.id)} >
						<Edit />
					</Buttons>
					<Buttons variant="delete" onClick={() => handleDelete(items.id as number)} >
						<DeleteForever />
					</Buttons>
				</ButtonsActions>
			)
		}
	], [])
	return (
		<DataGrid
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			rows={post}
			columns={columns}
			pageSize={pageSize}
			rowsPerPageOptions={[rowPerPage]}
			style={{ width: "100%" }}
		/>
	)
}
