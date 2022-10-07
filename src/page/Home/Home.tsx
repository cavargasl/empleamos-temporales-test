import { useState } from "react";
import { Modal } from "src/components";
import { Buttons } from "src/styled-components/buttons.styled.components";
import { PostTable } from './components';
import FormPost from "./components/FormPost";
import { LayoutHome } from "./styled-components";

export default function Home() {
	const [open, setOpen] = useState(false)
	function handleClick() {
		setOpen(e => !e)
	}

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