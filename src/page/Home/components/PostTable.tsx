import { DeleteForever, Edit } from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'src/components';
import { PostPreview } from "src/models";
import { addPostPreview, deletePostPreview, selectListPostPreview } from 'src/redux/slices/post';
import { Buttons } from "src/styled-components/buttons.styled.components";
import FormPost from './FormPost';
import { deletePost, getListPost, updatePartialPost } from "./services";
import { ButtonsActions } from "./styled-components";

export default function PostTable() {
	const [open, setOpen] = useState(false);
	const [page, setPage] = useState(5);
	const [postSelected, setPostSelected] = useState<PostPreview>()
	const listPostPreview = useSelector(selectListPostPreview)
	const dispatch = useDispatch()

	function handleDelete(id: number) {
		return deletePost(id).then(() => dispatch(deletePostPreview(id))).catch(() => console.error("Error to delete"))
	}

	function handleEdit(data: PostPreview) {
		setPostSelected(data)
		setOpen(true)
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
					<Buttons variant="edit" onClick={() => handleEdit(items.row)} >
						<Edit fontSize='inherit' />
					</Buttons>
					<Buttons variant="delete" onClick={() => handleDelete(items.id as number)} >
						<DeleteForever fontSize='inherit' />
					</Buttons>
				</ButtonsActions>
			)
		}
	], [])

	return (
		<>
			<DataGrid
				disableColumnSelector
				disableSelectionOnClick
				autoHeight
				rows={listPostPreview}
				columns={columns}
				pageSize={page}
				rowsPerPageOptions={[5, 7, 10]}
				style={{ width: "100%" }}
				onPageSizeChange={(newPage) => setPage(newPage)}
			/>
			<Modal open={open} onClose={() => setOpen(false)} closeOverlay>
				<FormPost data={postSelected} setOpen={setOpen} />
			</Modal>
		</>
	)
}
