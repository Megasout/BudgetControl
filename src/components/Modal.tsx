import "./css/Modal.css"
import CloseIcon from "../assets/cerrar.svg"
import { ChangeEvent, useEffect, useState } from "react"
import { BillType } from "../App"

type ModalProps = {
    setModal(value: boolean): void
}

function Modal(props: ModalProps) {
    const { setModal } = props

    const [animation, setAnimation] = useState<boolean>(false)

    const [bill, setBill] = useState<BillType>({
        name: '',
        type: '',
        value: ''
    })

    useEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }
            , 400)
    }, [])

    const { name, type, value } = bill

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
                    value={name}
                    onChange={(event) => setBill({ ...bill, name: event.target.value })}
                    placeholder="Añade el Nombre del Gasto" />
                <label
                    htmlFor="cantidad"
                    className="modal-label">Cantidad</label>
                <input
                    id="cantidad"
                    className="modal-input"
                    type="number"
                    value={value}
                    onChange={(event) => setBill({ ...bill, value: event.target.value })}
                    placeholder="Añade la Cantidad del Gasto: ej.300" />

                <label className="modal-label">Filtrar Gasto</label>
                <select
                    value={type}
                    onChange={event => setBill({ ...bill, type: event.target.value })}
                    id="modal-select" >
                    <option
                        value={''}
                        style={{ textAlign: 'center' }}>-- Seleccionar --</option>
                    <option value={"Ahorro"}>{'>>> '}Ahorro</option>
                    <option value={"Comida"}>{'>>> '}Comida</option>
                    <option value={"Hogar"}>{'>>> '}Hogar</option>
                    <option value={"Otros Gastos"}>{'>>> '}Otros Gastos</option>
                    <option value={"Entretenimiento"}>{'>>> '}Entretenimiento</option>
                    <option value={"Salud"}>{'>>> '}Salud</option>
                    <option value={"Suscripiones"}>{'>>> '}Suscripiones</option>
                </select>
                <input id="modal-submit" type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal