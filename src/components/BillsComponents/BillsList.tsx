import Bill from "./Bill"
import "./css/BillsList.css"
import { BillType } from "../../App"

type BillsListProps = {
    bills: BillType[]
    setBillToEddit: (bill: BillType) => void
    deleteBill: (id: string) => void
    filter: string
}

function BillsList(props: BillsListProps) {
    const { bills, setBillToEddit, deleteBill, filter } = props

    return (
        <div id="billsList">
            <div className="title">
                <h1>{bills.length ? 'Gastos' : 'No hay Gastos'}</h1>
            </div>


            {bills.map((bill) => {
                console.log(filter)
                console.log(bill.type)
                if (filter == 'All')
                    return (
                        <Bill
                            key={bill.id}
                            bill={bill}
                            setBillToEddit={setBillToEddit}
                            deleteBill={deleteBill}
                        />
                    )
                if (filter == bill.type)
                    return (
                        <Bill
                            key={bill.id}
                            bill={bill}
                            setBillToEddit={setBillToEddit}
                            deleteBill={deleteBill}
                        />
                    )
                else return
            })}
        </div>
    )
}

export default BillsList