import AddBudget from "./AddBudget"
import BudgetControl from "./BillsComponents/BudgetControl"
import "./css/Header.css"

type HeaderProps = {
    totalBudget: string
    spentBudget: number
    setBudget: (value: string) => void
    isSendedBudget: boolean
    setIsSendedBudget: (value: boolean) => void
}

function Header(props: HeaderProps) {
    const {
        totalBudget,
        spentBudget,
        setBudget,
        isSendedBudget,
        setIsSendedBudget } = props

    return (
        <div>
            <div className="backgroundBanner" />

            <div className="banner">
                <h1 className="title">Planificador de Gastos</h1>
                {(!isSendedBudget) ?
                    <AddBudget
                        budget={totalBudget}
                        setBudget={setBudget}
                        setIsSendedBudget={setIsSendedBudget} /> :
                    <BudgetControl
                        total={Number(totalBudget)}
                        spent={spentBudget}
                        remaining={Number(totalBudget) - spentBudget} />
                }
            </div>
        </div>
    )
}

export default Header