import { useEffect, useState } from "react"

import Header from "./components/Header"
import Modal from "./components/Modal"

import { Helpers } from "./helpers"

import NewBillIcon from "./assets/nuevo.svg"
import BillsList from "./components/BillsComponents/BillsList"
import BillsFilter from "./components/BillsComponents/BillsFilter"

function App() {
  const loadBudget: string = JSON.parse(localStorage.getItem('budget') as string ?? '0')
  const loadBills: BillType[] = JSON.parse(localStorage.getItem('bills') as string ?? '[]')

  const [isSendedBudget, setIsSendedBudget] = useState<boolean>(loadBudget != '0')
  const [modal, setModal] = useState<boolean>(false)

  const [bills, setBills] = useState<Array<BillType>>(loadBills)
  const [billToEddit, setBillToEddit] = useState<BillType | null>(null)
  const [budget, setBudget] = useState<string>(loadBudget)
  const [filter, setFilter] = useState<string>('All')

  useEffect(() => {
    if (billToEddit != null)
      setModal(true)
  }, [billToEddit])

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget))
  }, [budget])

  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills))
  }, [bills])

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

    setTimeout(() => {
      setBills(billsT)
      setBillToEddit(null)
    }, 500);
  }

  function handleDeleteBill(id: string) {
    let billsT = [...bills]
    const index = billsT.findIndex(b => b.id == id)
    billsT.splice(index, 1)
    setBills(billsT)
  }

  const handleResetApp = () => {
    localStorage.clear()
    setBills([])
    setBudget('0')
    setIsSendedBudget(false)
  }

  return (

    <div className="index" style={modal ? { height: '100vh', overflow: 'hidden' } : {}}>
      <Header
        totalBudget={budget}
        spentBudget={Helpers.getSpentBudget(bills)}
        setBudget={(value) => setBudget(value)}
        isSendedBudget={isSendedBudget}
        setIsSendedBudget={setIsSendedBudget}
        resetApp={handleResetApp} />

      {(isSendedBudget) &&
        <>
          <main>
            <BillsFilter
              filter={filter}
              setFilter={setFilter} />
            <BillsList
              bills={bills}
              filter={filter}
              setBillToEddit={setBillToEddit}
              deleteBill={handleDeleteBill} />
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