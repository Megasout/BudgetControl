import "./css/Bill.css"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';
import { BillType } from "../../App";
import { Helpers } from "../../helpers";

type BillProps = {
    bill: BillType
    setBillToEddit: (bill: BillType) => void
    deleteBill: (id: string) => void
}

function Bill(props: BillProps) {
    const { value, date, name, type } = props.bill

    const icon = Helpers.getIcon(type)

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => props.setBillToEddit(props.bill)}>
                <div>
                    <h3>Editar</h3>
                </div>
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={false}
                onClick={() => {
                    const result = confirm('Desea el eliminar el gasto ${name}?')
                    if (result == true)
                        props.deleteBill(props.bill.id as string)
                }}>
                <div>
                    <h3>Eliminar</h3>
                </div>
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <div id="billContainerData">

            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                    maxSwipe={1.0}>
                    <div id="billContainer">
                        <div className="billData">
                            <img className="icon" src={icon} draggable={false} />
                            <div style={{ marginLeft: '20px', paddingTop: '10px' }}>
                                <p className="normalLabel">{type}</p>
                                <p className="nameLabel">{name}</p>
                                <p>Agregado el:
                                    <span className="normalLabel"> {date}</span>
                                </p>
                            </div>
                        </div>
                        <h2 className="amount">{Helpers.formatToUSD(Number(value))}</h2>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>
    )
}

export default Bill