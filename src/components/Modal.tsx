import "./css/Modal.css"
import CloseIcon from "../assets/cerrar.svg"
import { useEffect, useState } from "react"

type ModalProps = {
    setModal(value: boolean): void
}

function Modal(props: ModalProps) {
    const { setModal } = props

    const handleCloseButton = () => {
        setModal(false)
    }

    const [animation, setAnimation] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            console.log('Animando')
            setAnimation(true)
        }
        , 500)
    }, [])

    const formClass = (animation) ? 'modal-form-animation' : ''

    return (
        <div id="modal">
            <img
                id="modal-close"
                src={CloseIcon}
                alt="Icono de Cierre"
                onClick={handleCloseButton} />
            <form className={"modal-form" + ' ' + formClass}>
                <legend id="modal-title">Nuevo Gasto</legend>
                <label className="modal-label">Nombre del Gasto</label>
                <input
                    className="modal-input"
                    type="text"
                    placeholder="Añade el Nombre del Gasto" />
                <label className="modal-label">Cantidad</label>
                <input
                    className="modal-input"
                    type="number"
                    placeholder="Añade la Cantidad del Gasto: ej.300" />
                <label className="modal-label">Filtrar Gasto</label>
                <select id="modal-select">
                    <option>--Seleccionar--</option>
                    <option value={"Ahorro"}>Comida</option>
                    <option value={"Comida"}>Comida</option>
                    <option value={"Hogar"}>Hogar</option>
                    <option value={"Otros Gastos"}>Comida</option>
                    <option value={"Ocio"}>Ocio</option>
                    <option value={"Salud"}>Salud</option>
                    <option value={"Suscripiones"}>Suscripiones</option>
                </select>
                <input id="modal-submit" type="submit" />
            </form>
        </div>
    )
}

export default Modal