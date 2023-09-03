import "./css/Bill.css"

type BillProps = {
    icon: string
}

function Bill(props: BillProps) {
    const { icon } = props

    return (
        <div id="billsContainer">
            <img className="icon" src={icon} />
            <div style={{marginLeft: '20px'}}>
                <p className="normalLabel">Tipo de Gasto</p>
                <p className="nameLabel">Nombre del Gasto</p>
                <p>Agregado el:
                    <span className="normalLabel"> 03 de Setiembre del 2023</span>
                </p>
            </div>
            <h2 className="amount">$450</h2>
        </div>
    )
}

export default Bill