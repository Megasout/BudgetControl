import AddBudget from "./AddBudget"
import BudgetControl from "./BudgetControl"
import "./css/Header.css"

type HeaderProps = {
    budget: string
    setBudget: (value: string) => void
    isSendedBudget: boolean
    setIsSendedBudget: (value: boolean) => void
}

function Header(props: HeaderProps) {
    const { budget, setBudget, isSendedBudget, setIsSendedBudget } = props

    return (
        <div>
            <div className="banner">
                <h1 className="title">Planificador de Gastos</h1>
                {(!isSendedBudget) ?
                    <AddBudget
                        budget={budget}
                        setBudget={setBudget}
                        setIsSendedBudget={setIsSendedBudget} /> :
                    <BudgetControl budget={parseFloat(budget)}/>
                }
            </div>
        </div>
    )
}

export default Header