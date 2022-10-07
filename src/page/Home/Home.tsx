import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "src/components";
import { addPostPreview } from "src/redux/slices/post";
import { Buttons } from "src/styled-components/buttons.styled.components";
import { getListPost, PostTable } from './components';
import FormPost from "./components/FormPost";
import { LayoutHome } from "./styled-components";

export default function Home() {
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()

	function handleClick() {
		setOpen(e => !e)
	}

	const getPost = async () => {
		try {
			const result = await getListPost()
			dispatch(addPostPreview(result))
		} catch (error) {
			console.error("error get posts")
		}
	}

	useEffect(() => {
		getPost()
	}, [])

	return (
		<LayoutHome>
			<Buttons variant='create' onClick={handleClick}>Crear Post</Buttons>
			<PostTable />
			<Modal open={open} onClose={() => setOpen(false)} closeOverlay>
				<FormPost isCreate setOpen={setOpen} />
			</Modal>
		</LayoutHome>
	)
}