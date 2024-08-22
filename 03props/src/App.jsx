import { useState } from 'react'
import Card from "./Components/Card"

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <h1 className="">Hershey</h1>
     <br />
     <Card name="hershey"></Card>
    </>
  )
}

export default App
