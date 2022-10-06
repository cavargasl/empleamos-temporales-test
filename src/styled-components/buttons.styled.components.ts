import { blue, green, grey, red } from '@mui/material/colors';
import styled from 'styled-components';

interface Props {
  variant?: "delete" | "edit" | "create"
}

function bgColor(color?: "delete" | "edit" | "create") {
  switch (color) {
    case "create":
      return green[400]
    case "edit":
      return blue[400]
    case "delete":
      return red[700]
    default:
      return grey[500]
  }
}

function hvColor(color?: "delete" | "edit" | "create") {
  switch (color) {
    case "create":
      return green[600]
    case "edit":
      return blue[600]
    case "delete":
      return red[900]
    default:
      return grey[700]
  }
}
export const Buttons = styled.button<Props>`
display: flex;
align-items: center;
  font-family: inherit;
  transition: border-color 0.25s;
  background-color: ${props => bgColor(props.variant)};
  color: "white";
  width: max-content;
  border: none;
  font-size: 1em;
  padding: 0.40em 1em;
  border-radius: 3px;
  font-weight: 400;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${props => hvColor(props.variant)};
  }
  &:focus, &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;