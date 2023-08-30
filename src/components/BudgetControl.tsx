import BillsList from "./BillsComponents/BillsList"
import "./css/BudgetControl.css"

function BudgetControl() {
    return (
        <div className="billsContainer">
            <p id="grafic">Grafica</p>
            <BillsList/>
        </div>
    )
}

export default BudgetControl
