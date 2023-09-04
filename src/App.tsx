import { useEffect, useState } from "react"

import Header from "./components/Header"
import Modal from "./components/Modal"

import { Helpers } from "./helpers"

import NewBillIcon from "./assets/nuevo.svg"
import BillsList from "./components/BillsComponents/BillsList"

function App() {
  const [isSendedBudget, setIsSendedBudget] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)

  const [bills, setBills] = useState<Array<BillType>>([])
  const [billToEddit, setBillToEddit] = useState<BillType | null>(null)
  const [budget, setBudget] = useState<string>('0')

  useEffect(() => {
    if (billToEddit != null)
      setModal(true)
  }, [billToEddit])

  const handleOnClickNewBills = () => {
    setModal(true)
  }

  function handleAddBill(bill: BillType) {
    let billsT = [...bills]

    if (billToEddit == null) {
      const date = Helpers.getDate()
      billsT.push({ ...bill, id: Helpers.generateId(), date: date })
    } else {
      const index = billsT.findIndex(b => b.id == bill.id)
      billsT[index] = bill
    }

    setBills(billsT)
    setBillToEddit(null)
  }

  return (
    <div style={modal ? { height: '100vh', overflow: 'hidden' } : {}}>
      <Header
        totalBudget={budget}
        spentBudget={Helpers.getSpentBudget(bills)}
        setBudget={(value) => setBudget(value)}
        isSendedBudget={isSendedBudget}
        setIsSendedBudget={setIsSendedBudget} />

      {(isSendedBudget) &&
        <>
          <main>
            <BillsList bills={bills} setBillToEddit={setBillToEddit} />
          </main>
          <img id="newBill"
            src={NewBillIcon}
            alt="Icono Nuevo Gasto"
            onClick={handleOnClickNewBills} />
        </>
      }

      {(modal) &&
        <Modal
          addBill={handleAddBill}
          setModal={setModal}
          billToEddit={billToEddit}
          setBillToEddit={setBillToEddit} />
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