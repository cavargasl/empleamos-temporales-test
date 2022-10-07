import styled from "styled-components";

interface Props {
  isError?: boolean
}
export const InputText = styled.input<Props>`
  font-family: inherit;
  font-size: 1rem;
  border: ${props => props.isError ? "1px solid red" : "1px solid transparent"};
  border-radius: 3px;
  padding: 3px;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
`
export const InputTextArea = styled.textarea<Props>`
  font-family: inherit;
  min-height: 100px;
  font-size: 1rem;
  border: ${props => props.isError ? "1px solid red" : "1px solid transparent"};
  border-radius: 3px;
  padding: 3px;
  resize: vertical;
  &:focus {
    outline: none;
  }
`