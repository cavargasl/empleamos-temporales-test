import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { PostPreview } from "src/models";
import getListPost from "./services/getPosts";

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 100 },
	{ field: 'userId', headerName: 'User ID', width: 100 },
	{ field: 'body', headerName: 'Cuerpo', minWidth: 130, flex: 1 },
	{ field: 'title', headerName: 'Titulo', type: 'number', minWidth: 130, flex: 1 }
];

export default function Home() {
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

	return (
		<DataGrid
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			rows={post}
			columns={columns}
			pageSize={pageSize}
			rowsPerPageOptions={[rowPerPage]}
			getRowId={(row => row.id)}
		/>
	)
}