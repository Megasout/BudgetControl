import { useState } from "react"
import AddBudget from "./AddBudget"
import "./css/Header.css"

function Header() {
    const [budget, setBudget] = useState<string>("0")

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