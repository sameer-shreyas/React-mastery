import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}
            onClick={ (e) => setColor('red')}
            >Red</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}
            onClick={ (e) => setColor('green')}
            >Green</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"blue"}}
            onClick={ (e) => setColor('blue')}
            >Blue</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"orange"}}
            onClick={ (e) => setColor('orange')}
            >Orange</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"grey"}}
            onClick={ (e) => setColor('grey')}
            >Grey</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"pink"}}
            onClick={ (e) => setColor('pink')}
            >pink</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"yellow"}}
            onClick={ (e) => setColor('yellow')}
            >Yellow</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"violet"}}
            onClick={ (e) => setColor('violet')}
            >Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
