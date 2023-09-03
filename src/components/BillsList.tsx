import Bill from "./BillsList/Bill"
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
            <Bill icon={ahorro} />
        </div>
    )
}

export default BillsList