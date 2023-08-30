import BillsList from "./BillsComponents/BillsList"
import "./css/BudgetControl.css"

type BudgetControlProps= {
    budget: number
}

function BudgetControl(props: BudgetControlProps) {
    const {budget} = props

    return (
        <div className="billsContainer">
            <p id="grafic">Grafica</p>
            <BillsList budget={budget}/>
        </div>
    )
}

export default BudgetControl
