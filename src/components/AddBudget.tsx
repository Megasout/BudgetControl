import { ChangeEvent, useState } from "react"
import "./css/AddBudget.css"
import Message from "./Message"

type AddBudgetProps = {
    budget: string,
    setBudget: (value: string) => void
    setIsSendedBudget: (value: boolean) => void
}

function AddBudget(props: AddBudgetProps) {
    const {budget, setBudget, setIsSendedBudget} = props
    const [showMessage, setShowMessage] = useState<boolean>(false)

    const handleOnChangeBadget = (event: ChangeEvent<HTMLInputElement>) => {
        if (/^(\d+(\.\d*)?)?$/.test(event.target.value)) {
            return setBudget(event.target.value)
        }
    }

    const handleOnSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(parseFloat(budget) > 0){
            setShowMessage(false)
            setIsSendedBudget(true)
            return 
        }
    
        setShowMessage(true) 
    }

    return (
        <div className="formcolumn">
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="textInput">Definir Presupuesto</label>
            <input
                id="textInput"
                placeholder="Añade un Presupuesto"
                type="text"
                value={budget}
                onChange={handleOnChangeBadget} />
            {(showMessage) && <Message>El presupuesto tiene que ser mayor a 0</Message>}
            <input className="buttonInput" type="submit" value={"Añadir"} />
        </form>
    </div>
    )
}

export default AddBudget