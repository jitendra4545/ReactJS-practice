import React, { useState } from 'react'

export const Register = () => {
//const [, set] = useState(initialState)
    const handleSignup=async()=>{



        let data=await fetch(`http://localhost:8000/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify()
        })
    }


  return (
    <div>
        <input type="text" placeholder='enter name' />
        <input type="text" placeholder='enter email' />
        <input type="text" placeholder='enter password' />
        <button onClick={handleSignup}>Register</button>
    </div>
  )
}
