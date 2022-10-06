
import { Close } from '@mui/icons-material';
import { createPortal } from "react-dom";
import { IconButton, ModalClose, ModalOverlay, ModalStyled } from "src/styled-components";
interface Porps {
  children: JSX.Element | JSX.Element[]
  open: boolean
  onClose: () => void
  closeOverlay?: boolean
}
export default function Modal({ open, children, onClose, closeOverlay }: Porps) {
  if (!open) return null

  return createPortal(
    <>
      <ModalOverlay onClick={closeOverlay ? onClose : () => null} />
      <ModalStyled>
        <ModalClose>
          <IconButton onClick={onClose}>
            <Close color="action" />
          </IconButton>
        </ModalClose>
        {children}
      </ModalStyled>
    </>,

    document.getElementById('modal') as HTMLElement
  )
}