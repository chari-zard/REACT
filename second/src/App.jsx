import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,setcounter] = useState(1)

  const addval = () => {
    setcounter(counter+=1)
    console.log("clicked",counter);
  }

  const removeval =()=>{
    if (counter>0) {
      setcounter(counter-=1)
    }else{
      alert("kya kr rha h bhai???")
    }
  }


  return (
    <>
    <h1>Thsi is preview</h1>
    <button onClick={addval}>Add {counter}</button>
    <button onClick={removeval}>remove {counter}</button>
    <p>test {counter}</p>

    </>
  )
}

export default App
