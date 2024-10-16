import React,{useState,useContext} from 'react'
import UserContext from '../assets/context/UserContext';

function profile() {
    const [username, setuserame] = useState('');
    const [password,setpassword] = useState("");
    const {setuser} = useContext(UserContext);

    const HandleSubmit=()=>{
        e.preventDefault()
        setuser({username,password});

    }
  return (
    <div>
      <input 
      type="text" 
      placeholder="Enter your name"
      value={username}
      onChange={(e)=>setuserame(e.target.value)}
      />
      <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      />
      <button onClick={HandleSubmit}>Login</button>
    </div>
  )
}

export default profile