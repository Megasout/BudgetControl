import { ChangeEvent } from "react"
import "./css/AddBudget.css"

type AddBudgetProp = {
    budget: string,
    setBudget: (value: string) => void
}

function AddBudget(prop: AddBudgetProp) {
    const {budget, setBudget} = prop

    const handleOnChangeBadget = (event: ChangeEvent<HTMLInputElement>) => {
        if (/^(\d+(\.\d*)?)?$/.test(event.target.value)) {
            return setBudget(event.target.value)
        }
    }

    return (
        <div className="formcolumn">
        <form>
            <label htmlFor="textInput">Definir Presupuesto</label>
            <input
                id="textInput"
                placeholder="Añade un Presupuesto"
                type="text"
                value={budget}
                onChange={handleOnChangeBadget} />
            <input className="buttonInput" type="submit" value={"Añadir"} />
        </form>
    </div>
    )
}

export default AddBudget