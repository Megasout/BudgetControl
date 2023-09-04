import ViewBills from "./ViewBills"
import "./css/BudgetControl.css"

type BudgetControlProps = {
    total: number
    remaining: number
    spent: number
}

function BudgetControl(props: BudgetControlProps) {
    const { total, remaining, spent } = props

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
