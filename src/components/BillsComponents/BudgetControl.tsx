import ViewBills from "./ViewBills"
import "./css/BudgetControl.css"

type BudgetControlProps= {
    budget: number
}

function BudgetControl(props: BudgetControlProps) {
    const {budget} = props

    return (
        <div className="billsContainer">
            <p id="grafic">Grafica</p>
            <ViewBills budget={budget}/>
        </div>
    )
}

export default BudgetControl
