import "./css/Modal.css"
import CloseIcon from "../assets/cerrar.svg"
import { useEffect, useState } from "react"

type ModalProps = {
    setModal(value: boolean): void
}

function Modal(props: ModalProps) {
    const { setModal } = props

    const [animation, setAnimation] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }
            , 400)
    }, [])

    const handleCloseButton = () => {
        setAnimation(false)

        setTimeout(() => {
            setModal(false)
        }
            , 500)
    }

    const formClass = (animation) ? 'modal-form-animation' : 'modal-form-animation-closing'

    return (
        <div id="modal">
            <img
                id="modal-close"
                src={CloseIcon}
                alt="Icono de Cierre"
                onClick={handleCloseButton} />

            <form className={"modal-form" + ' ' + formClass}>
                <legend id="modal-title">Nuevo Gasto</legend>
                <label
                    htmlFor="name"
                    className="modal-label">Nombre del Gasto</label>
                <input
                    id="name"
                    className="modal-input"
                    type="text"
                    placeholder="Añade el Nombre del Gasto" />
                <label
                    htmlFor="cantidad"
                    className="modal-label">Cantidad</label>
                <input
                    id="cantidad"
                    className="modal-input"
                    type="number"
                    placeholder="Añade la Cantidad del Gasto: ej.300" />

                <label className="modal-label">Filtrar Gasto</label>
                <select id="modal-select" >
                    <option style={{ textAlign: 'center' }}>-- Seleccionar --</option>
                    <option value={"Ahorro"}>{'>>> '}Ahorro</option>
                    <option value={"Comida"}>{'>>> '}Comida</option>
                    <option value={"Hogar"}>{'>>> '}Hogar</option>
                    <option value={"Otros Gastos"}>{'>>> '}Otros Gastos</option>
                    <option value={"Entretenimiento"}>{'>>> '}Entretenimiento</option>
                    <option value={"Salud"}>{'>>> '}Salud</option>
                    <option value={"Suscripiones"}>{'>>> '}Suscripiones</option>
                </select>
                <input id="modal-submit" type="submit" value="Añadir Gasto"/>
            </form>
        </div>
    )
}

export default Modal