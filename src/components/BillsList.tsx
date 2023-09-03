import Bill from "./BillsList/Bill"
import "./css/BillsList.css"
import { BillType } from "../App"
import { Helpers } from "../helpers"

type BillsListProps = {
    bills: BillType[]
}

function BillsList(props: BillsListProps) {
    const { bills } = props

    return (
        <div id="billsList">
            <h1 className="title">Gastos</h1>

            {bills.map((bill) => {                
                return (
                    <Bill
                        key={bill.id}
                        amount={bill.value}
                        date="03 de setiembre del 2023"
                        icon={Helpers.getIcon(bill.type)}
                        name={bill.name}
                        type={bill.type}
                    />
                )
            })}
        </div>
    )
}

export default BillsList