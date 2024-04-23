import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue = () => {
    console.log("value added", Math.random());
    // counter++;
    if(counter + 1 <= 20)
      setCounter(counter+1)
    console.log("Clicked", counter);
  }
  const RemoveValue = () => {
    console.log("value added", Math.random());
    // counter++;
    if(counter - 1 >= 0)
      setCounter(counter-1)
    console.log("Clicked", counter);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button> 
      <br />
      <button
      onClick={RemoveValue}
      >Decrease Value {counter}</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App
