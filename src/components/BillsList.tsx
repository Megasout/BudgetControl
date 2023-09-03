import Bills from "./BillsList/Bills"
import "./css/BillsList.css"

import {
    ahorro,
    casa,
    comida,
    gastos,
    ocio,
    salud,
    suscripciones
} from "../assets"

function BillsList() {
    return (
        <div id="billsList">
            <h1 className="title">Gastos</h1>
            <Bills />
        </div>
    )
}

export default BillsList