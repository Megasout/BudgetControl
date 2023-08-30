import "./css/BillsList.css"

function BillsList() {
    return (
        <div id="bills">
            <button id="resetbutton">RESETEAR APP</button>
            <Label title="Presupuesto:" value="$200" />
            <Label title="Disponible:" value="$200" />
            <Label title="Gastado:" value="$0" />
        </div>
    )
}

export default BillsList

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
