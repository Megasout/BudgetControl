import "./css/Bill.css"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';

type BillProps = {
    icon: string
    name: string
    type: string
    date: string
    amount: string
}

function Bill(props: BillProps) {
    const { icon, amount, date, name, type } = props

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => console.log('editar')}>
                <div>
                    <h3>Editar</h3>
                </div>
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction destructive={false} onClick={() => console.log('eliminar')}>
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
                        <h2 className="amount">{amount}</h2>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>
    )
}

export default Bill