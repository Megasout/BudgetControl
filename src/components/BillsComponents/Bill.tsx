import "./css/Bill.css"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

type BillProps = {
    icon: string
    name: string
    type: string
    date: string
    amount: string
}

function Bill(props: BillProps) {
    const { icon, amount, date, name, type } = props

    return (
        <SwipeableList>
            <div id="billContainer">
                <div className="billData">
                    <img className="icon" src={icon} />
                    <div style={{ marginLeft: '20px', paddingTop: '10px' }}>
                        <p className="normalLabel">{type}</p>
                        <p className="nameLabel">{name}</p>
                        <p>Agregado el:
                            <span className="normalLabel"> {date}</span>
                        </p>
                    </div>
                </div>
                <h2 className="amount">{amount}</h2>
            </div>
        </SwipeableList>
    )
}

export default Bill