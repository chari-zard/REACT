import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()

    // const [data,setData] = useState([null])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setData(data);
    //         })
    //         .catch(error => {
    //             console.error('Fetch error:', error);
    //             setError('Something went wrong'); 
    //         });
    // }, []);
  return (
    <div >
      <div className='bg-slate-700 text-white text-3xl py-3 px-28'>     
        Followes:{data.followers}
      </div>

      <img src={data.avatar_url} alt="user avatar" className="w-[250px ]" />
    </div>
  )
}
export default Github

export const githubusingloader = async ()=>{
  const response = await fetch('https://api.github.com/users/harshitydvv')
  return response.json()
}
