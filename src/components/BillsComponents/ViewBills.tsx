import { Helpers } from "../../helpers"
import "./css/ViewBills.css"

type ViewBillsProps = {
    budget: number
}

function ViewBills(props: ViewBillsProps) {
    const { budget } = props

    return (
        <div id="bills">
            <button id="resetbutton">RESETEAR APP</button>
            <Label title="Presupuesto:" value={Helpers.formatToUSD(budget)} />
            <Label title="Disponible:" value="$200" />
            <Label title="Gastado:" value="$0" />
        </div>
    )
}

export default ViewBills

type LabelProps = {
    title: string
    value: string
}

function Label(props: LabelProps) {
    const { title, value } = props

    return (
        <div>
            <h2 className="labelTitle">{title}
                <span className="labelValue">{" " + value}</span></h2>
        </div>
    )
}