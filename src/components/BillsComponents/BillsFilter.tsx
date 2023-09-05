import "./css/BillsFilter.css"

type BillsFilterProps = {
    filter: string
    setFilter: (value: string) => void
}

function BillsFilter(props: BillsFilterProps) {
    const {filter, setFilter} = props

    const handleOnChange = (value: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(value.target.value)
    }

    return (
        <div id="filtro">
            <h2>Filtrar Gastos</h2>
            <select value={filter} onChange={handleOnChange}>
                    <option
                        value={'All'}>Todas las Categorias</option>
                    <option value={"Ahorro"}>Ahorro</option>
                    <option value={"Comida"}>Comida</option>
                    <option value={"Hogar"}>Hogar</option>
                    <option value={"Otros Gastos"}>Otros Gastos</option>
                    <option value={"Entretenimiento"}>Entretenimiento</option>
                    <option value={"Salud"}>Salud</option>
                    <option value={"Suscripiones"}>Suscripiones</option>
                </select>
        </div>
    )
}

export default BillsFilter