import { useState } from "react"

import Header from "./components/Header"
import Modal from "./components/Modal"

import { Helpers } from "./helpers"

import NewBillIcon from "./assets/nuevo.svg"
import BillsList from "./components/BillsComponents/BillsList"

function App() {
  const [isSendedBudget, setIsSendedBudget] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [bills, setBills] = useState<Array<BillType>>([])
  const [budget, setBudget] = useState<Budget>({
    total: '0',
    remaining: 0,
    spent: 0
  })

  const handleOnClickNewBills = () => {
    setModal(true)
  }

  function handleAddBill(bill: BillType) {
    let billsT = [...bills]
    const date = Helpers.getDate()
    billsT.push({ ...bill, id: Helpers.generateId(), date: date })
    setBills(billsT)
    setBudget({
      ...budget,
      remaining: budget.remaining - Number(bill.value),
      spent: budget.spent + Number(bill.value)
    })
  }

  return (
    <div style={modal ? { height: '100vh', overflow: 'hidden' } : {}}>
      <Header
        budget={budget}
        setBudget={(value) => setBudget({
          ...budget,
          total: value,
          remaining: Number(value)
        })}
        isSendedBudget={isSendedBudget}
        setIsSendedBudget={setIsSendedBudget} />

      {(isSendedBudget) &&
        <>
          <main>
            <BillsList bills={bills} />
          </main>
          <img id="newBill"
            src={NewBillIcon}
            alt="Icono Nuevo Gasto"
            onClick={handleOnClickNewBills} />
        </>
      }

      {(modal) &&
        <Modal addBill={handleAddBill} setModal={setModal} />
      }
    </div>
  )
}

export default App

export type BillType = {
  id?: string
  date?: string
  name: string
  value: string
  type: string
}

export type Budget = {
  total: string
  remaining: number
  spent: number
}