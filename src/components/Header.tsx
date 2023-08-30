import AddBudget from "./AddBudget"
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
                <AddBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsSendedBudget={setIsSendedBudget} />
            </div>
        </div>
    )
}

export default Header