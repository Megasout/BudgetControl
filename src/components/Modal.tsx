import "./css/Modal.css"
import CloseIcon from "../assets/cerrar.svg"
import { useEffect, useState } from "react"
import { BillType } from "../App"
import Message from "./Message"

type ModalProps = {
    setModal(value: boolean): void
    addBill(value: BillType): void
    billToEddit: BillType | null
    setBillToEddit: (value: null) => void
}

function Modal(props: ModalProps) {
    const { setModal, addBill, billToEddit, setBillToEddit } = props

    const [animation, setAnimation] = useState<boolean>(false)

    const [bill, setBill] = useState<BillType>(billToEddit ?
        billToEddit
        : {
            name: '',
            type: '',
            value: ''
        })

    const [error, setError] = useState<string>('')

    useEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }
            , 400)
    }, [])

    const { name, type, value } = bill

    const handleCloseButton = () => {
        setAnimation(false)
        setBillToEddit(null)

        setTimeout(() => {
            setModal(false)
        }
            , 500)
    }

    const handleValidateForm = (e: React.FormEvent) => {
        e.preventDefault()

        if (/^\s*$/.test(name))
            return setError('El campo nombre no puede estar vacio')
        if (value == '' || (value != '' && Number(value) <= 0))
            return setError('Ingrese una cantidad mayor a 0')
        if (type == '')
            return setError('Seleccione un filtro')

        setError('')
        addBill(bill)
        handleCloseButton()
    }

    const formClass = (animation) ? 'modal-form-animation' : 'modal-form-animation-closing'

    return (
        <div id="modal">
            <img
                id="modal-close"
                src={CloseIcon}
                alt="Icono de Cierre"
                onClick={handleCloseButton} />

            <form
                onSubmit={handleValidateForm}
                className={"modal-form" + ' ' + formClass}>
                <legend id="modal-title">{billToEddit  ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {(error != '') && <Message>{error}</Message>}

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