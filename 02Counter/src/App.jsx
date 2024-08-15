import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increaseCount = ()=>{
    setCount(count+1)
  }

  const decreaseCount = ()=>{
    setCount(count-1)
  }

  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={increaseCount}>Increment:{count}</button>
    <br />
    <button onClick={decreaseCount}>Decrease:{count}</button>
    <br />
    <button>Footer:{count}</button>
  
    
     
    </>
  )
}

export default App
