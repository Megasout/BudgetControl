import AddBudget from "./AddBudget"
import "./css/Header.css"

type HeaderProps = {
    budget: string,
    setBudget: (value: string) => void
}

function Header(props: HeaderProps) {
    const {budget, setBudget} = props

    return (
           <div>
            <div className="banner">
                <h1 className="title">Planificador de Gastos</h1>
                <AddBudget budget={budget} setBudget={setBudget}/>
            </div>
        </div>
    )
}

export default Header