import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [budget, setBudget] = useState<string>("0")
  const [isSendedBudget, setIsSendedBudget] = useState<boolean>(false)

  return (
    <Header
      budget={budget}
      setBudget={setBudget}
      isSendedBudget={isSendedBudget}
      setIsSendedBudget={setIsSendedBudget} />
  )
}

export default App
