
import { createPortal } from "react-dom"
import { Buttons, ModalClose, ModalOverlay, ModalStyled } from "src/styled-components"
import { Close } from '@mui/icons-material';
interface Porps {
  children: JSX.Element | JSX.Element[]
  open: boolean
  onClose: () => void
  closeOverlay?: boolean
}
export default function Modal({ open, children, onClose, closeOverlay }: Porps) {
  if (!open) return null

  return createPortal(
    <ModalOverlay onClick={closeOverlay ? onClose : () => null}>
      <ModalStyled>
        <ModalClose>
          <Buttons style={{padding: ".2rem"}}>
            <Close />
          </Buttons>
        </ModalClose>
        {children}
      </ModalStyled>
    </ModalOverlay>,
    document.getElementById('modal') as HTMLElement
  )
}