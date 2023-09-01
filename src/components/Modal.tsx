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
            <form id="modal-form">
                <legend id="modal-title">Nuevo Gasto</legend>
                <label className="modal-label">Nombre del Gasto</label>
                <input className="modal-input" type="text"/>
                <label className="modal-input">Cantidad</label>
                <input className="modal-input" type="text"/>
                <label className="modal-input">Filtrar Gasto</label>
                <select name="Seleccionar">
                    <option>Seleccionar</option>
                    <option value={"Suscripiones"}>Suscripiones</option>
                    <option value={"Ocio"}>Ocio</option>
                    <option value={"Hogar"}>Hogar</option>
                    <option value={"Salud"}>Salud</option>
                    <option value={"Comida"}>Comida</option>
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Modal