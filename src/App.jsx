import { useState } from 'react'
import './App.css'
import Carasole from './Carasole'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hiii By App</h1>
      <Carasole/>
      </>
  )
}

export default App
