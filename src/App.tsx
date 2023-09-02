import { useState } from "react"
import Header from "./components/Header"
import NewBillIcon from "./assets/nuevo.svg"
import Modal from "./components/Modal"

function App() {
  const [budget, setBudget] = useState<string>("0")
  const [isSendedBudget, setIsSendedBudget] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [bills, setBills] = useState<Array<BillType>>([])

  const handleOnClickNewBills = () => {
    setModal(true)
  }

  function handleAddBill(bill: BillType) {
    let billsT = [...bills]
    billsT.push(bill)
    setBills(billsT)
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isSendedBudget={isSendedBudget}
        setIsSendedBudget={setIsSendedBudget} />

      {(isSendedBudget) &&
        <img id="newBill"
          src={NewBillIcon}
          alt="Icono Nuevo Gasto"
          onClick={handleOnClickNewBills} />}

      {(modal) &&
        <Modal addBill={handleAddBill} setModal={setModal} />
      }
    </div>
  )
}

export default App

export type BillType = {
  name: string
  value: string
  type: string
}