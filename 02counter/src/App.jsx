import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter, setCounter]=useState(15)

  // let counter=15;
  const addValue=()=>{
    // counter=counter+1;
    setCounter(counter+1)
    // console.log("clicked", counter);
  }

  const removeValue=()=>{
    // console.log("clicked", counter);
    if(counter>0)
      setCounter(counter-1)
  }

  return (
    <>
    <h1> Chai aur React</h1>
    <h2> Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    > ADD Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
    
    </>
  )
}

export default App
