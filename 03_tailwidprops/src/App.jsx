import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/Components/Card'
function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    age:29,
    username:"Hitesh"
  }
  let newArr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='mb-4 bg-green-400 text-black rounded-xl p-4'>Tailwind Test</h1>
      <Card username="Chai aur code" someObj = {myObj} myArr = {newArr} btnText= "click Me"/>
      <Card username="Sameer" btnText= "Visit Me" />
    </>
  )
}

export default App
