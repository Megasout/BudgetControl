import { Budget } from "../../App"
import ViewBills from "./ViewBills"
import "./css/BudgetControl.css"

type BudgetControlProps = {
    budget: Budget
}

function BudgetControl(props: BudgetControlProps) {
    const { total, remaining, spent } = props.budget

    return (
        <div className="billsContainer">
            <p id="grafic">Grafica</p>
            <ViewBills total={Number(total)}
                remaining={remaining}
                spent={spent} />
        </div>
    )
}

export default BudgetControl
