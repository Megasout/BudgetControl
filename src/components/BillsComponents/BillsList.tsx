import Bill from "./Bill"
import "./css/BillsList.css"
import { BillType } from "../../App"

type BillsListProps = {
    bills: BillType[]
    setBillToEddit: (bill: BillType) => void
}

function BillsList(props: BillsListProps) {
    const { bills, setBillToEddit } = props

    return (
        <div id="billsList">
            <div className="title">
                <h1>{bills.length ? 'Gastos' : 'No hay Gastos'}</h1>
            </div>


            {bills.map((bill) => {
                return (
                    <Bill
                        key={bill.id}
                        bill={bill}
                        setBillToEddit={setBillToEddit}
                    />
                )
            })}
        </div>
    )
}

export default BillsList