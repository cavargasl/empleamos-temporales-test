import { Buttons } from "src/styled-components/buttons.styled.components";
import { PostTable } from './components';
import { LayoutHome } from "./styled-components";

export default function Home() {
	

	return (
		<LayoutHome>
			<Buttons variant='create'>Crear Post</Buttons>
			<PostTable />
		</LayoutHome>
	)
}