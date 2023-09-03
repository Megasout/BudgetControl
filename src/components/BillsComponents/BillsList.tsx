import "./css/BillsList.css"

type BillsListProps = {
    budget: number
}

function BillsList(props: BillsListProps) {
    const { budget } = props

    function formatToUSD(value: number): string {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div id="bills">
            <button id="resetbutton">RESETEAR APP</button>
            <Label title="Presupuesto:" value={formatToUSD(budget)} />
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