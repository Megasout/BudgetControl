import { Budget } from "../App"
import AddBudget from "./AddBudget"
import BudgetControl from "./BillsComponents/BudgetControl"
import "./css/Header.css"

type HeaderProps = {
    budget: Budget
    setBudget: (value: string) => void
    isSendedBudget: boolean
    setIsSendedBudget: (value: boolean) => void
}

function Header(props: HeaderProps) {
    const { budget, setBudget, isSendedBudget, setIsSendedBudget } = props

    return (
        <div>
            <div className="backgroundBanner" />

            <div className="banner">
                <h1 className="title">Planificador de Gastos</h1>
                {(!isSendedBudget) ?
                    <AddBudget
                        budget={budget.total}
                        setBudget={setBudget}
                        setIsSendedBudget={setIsSendedBudget} /> :
                    <BudgetControl budget={budget} />
                }
            </div>
        </div>
    )
}

export default Header