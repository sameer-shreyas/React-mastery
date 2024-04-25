import { useState, useCallback, useEffect, useRef } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState("")

  //ref Hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(pass)
  },[pass] )

  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()_+"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)

    }
    setPass(password)
  }, [length, numAllowed, charAllowed, setPass])
  // passwordGenerator()
  useEffect(() => {passwordGenerator()}, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex items-center flex-shadow rounded-lg overflow-hidden mb-4'>
      <input
        type='text'
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard} 
      className="ml-2 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type='range'
        min={6} max={100}
        value={length}
        className='cursor-pointer'
        onChange= {(e) => {setLength(e.target.value)}}
      />
      <label>Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox'
        defaultChecked = {numAllowed}
        id="numInput"
        onChange= {() => {setNumAllowed((prev) => !prev)}}
      />
      <label>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox'
        defaultChecked = {charAllowed}
        id="charInput"
        onChange= {() => {setCharAllowed((prev) => !prev)}}
      />
      <label>Characters</label>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
