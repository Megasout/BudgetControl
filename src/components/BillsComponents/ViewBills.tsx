import { Helpers } from "../../helpers"
import "./css/ViewBills.css"

type ViewBillsProps = {
    total: number
    remaining: number
    spent: number
}

function ViewBills(props: ViewBillsProps) {

    const {total, remaining, spent} = props

    return (
        <div id="bills">
            <button id="resetbutton">RESETEAR APP</button>
            <Label title="Presupuesto:" value={Helpers.formatToUSD(total)} />
            <Label title="Disponible:" value={Helpers.formatToUSD(remaining)} />
            <Label title="Gastado:" value={Helpers.formatToUSD(spent)} />
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
