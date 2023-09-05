import ViewBills from "./ViewBills"
import "./css/BudgetControl.css"

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type BudgetControlProps = {
    total: number
    remaining: number
    spent: number
    resetApp: () => void
}

function BudgetControl(props: BudgetControlProps) {
    const { total, remaining, spent, resetApp } = props

    const percentage = ((spent * 100) / total)

    return (
        <div className="billsContainer">
            <CircularProgressbar
                value={percentage}
                text={'Gastado: ' + percentage.toFixed(1) + '%'} />
            <ViewBills
                total={Number(total)}
                remaining={remaining}
                spent={spent}
                resetApp={resetApp} />
        </div>
    )
}

export default BudgetControl
