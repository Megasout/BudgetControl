import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [budget, setBudget] = useState<string>("0")

  return (
    <Header budget={budget} setBudget={setBudget}/>
  )
}

export default App
