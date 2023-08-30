import "./css/Modal.css"
import CloseIcon from "../assets/cerrar.png"

type ModalProps = {
    setModal(value: boolean): void
}

function Modal(props: ModalProps) {
    const { setModal } = props

    const handleCloseButton = () => {
        setModal(false)
    }

    return (
        <div id="modal">
            <img
                id="modal-close"
                src={CloseIcon}
                alt="Icono de Cierre"
                onClick={handleCloseButton} />
        </div>
    )
}

export default Modal