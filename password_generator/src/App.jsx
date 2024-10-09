import { useCallback, useState,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [length,setlength] = useState(8)
  const [allownum,setallownum] = useState(false)
  const [allowsym,setallowsym] = useState(false)
  const [password,setpassword] = useState('')
  
  const passwordref = useRef(null)
  
  const copypass= useCallback(()=>{
    passwordref.current?.select()//to select the password
    passwordref.current?.setSelectionRange(0,10)//to set the area within the limit to select

    window.navigator.clipboard.writeText(password.slice(0,10))//slice method for only copying the set limit
  },[password])


  const passwordgenerator = useCallback(()=>{
  
   let  pass=""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(allownum) str+='1234567890'
    if(allowsym) str+='!@#$%^&*()_+-={}:'
    for(let i=1;i<=length;i++){
      let passindex = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(passindex)
      }
    setpassword(pass)

  },[length,allownum,allowsym,setpassword])

  useEffect(()=>{
    passwordgenerator()
  },[length,allownum,allowsym,passwordgenerator])
  return (
    <>
    <div className='m-auto fixed top-16 left-[30%] max-w-[600px] w-full mx-auto bg-slate-500 rounded'>
      <h2 className='text-white text-center py-3'>Password Generator</h2>
      <div className='flex mb-4 rounded px-4'>
        <input 
        type="text"
        value={password}
        className='outline-none rounded w-full bg-white text-black py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref}
         />
         <button
          className="copy bg-green-500 rounded"
          onClick={copypass}
          >
            Copy
            
            </button>
      </div>
      <div className='pb-4 px-4 flex justify-around'>
        <div>
        <input
         type="range"
         min="8"
         max="32"
         value={length}
         onChange={(e)=>{setlength(e.target.value)}}         
          />
          <label>Length:{length}</label>
        </div>
        <div>
        <input 
        type="checkbox" 
        className='px-3' 
        defaultChecked = {allownum}
        id = "numinput"
        onChange={(e)=>{setallownum((prev) => !prev)}}/>

        <label>Add Numbers</label>
        </div>
        <div>
        <input 
        type="checkbox" 
        className='px-3'
        defaultChecked = {allowsym}
        id = "syminput"
        onChange={(e)=>{setallowsym((prev) => !prev)}}
        />
        <label>Add Symbols</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
