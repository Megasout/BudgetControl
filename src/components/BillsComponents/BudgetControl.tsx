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

    if (percentage > 100){
        document.documentElement.style.setProperty("--circularProgressBar_Color", "Crimson")
        document.documentElement.style.setProperty("--remainingText_Color", "Crimson")
    }else{
        document.documentElement.style.setProperty("--circularProgressBar_Color", "steelblue")
        document.documentElement.style.setProperty("--remainingText_Color", "Black")
    }

    return (
        <div className="billsContainer">
            <div className="circularBarContainer">
                <CircularProgressbar
                    value={percentage}
                    text={'Gastado: ' + percentage.toFixed(1) + '%'} />
            </div>
            <ViewBills
                total={Number(total)}
                remaining={remaining}
                spent={spent}
                resetApp={resetApp} />
        </div>
    )
}

export default BudgetControl
