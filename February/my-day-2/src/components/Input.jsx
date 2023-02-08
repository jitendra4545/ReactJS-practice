import React, { useState } from 'react'

export const Input = ({addName}) => {

    const [name,setname]=useState('')

    const handleAdd=()=>{
addName(name)
    }

  return (
    <div>
        <div  >
          <h4  style={{color:'greenyellow'}} >
          Happy Propose Day 
          </h4>
          </div>
    <div style={{display:'grid',width:'100px',marginLeft:'100px'}}>
        <input value={name} onChange={(e)=>setname(e.target.value)}  style={{border:'2px solid blue',marginBottom:'5px'}} placeholder='enter your name ' type="text"  />
        <buttonn onClick={handleAdd}  style={{backgroundColor:'yellow',width:'60%',margin:'auto'}}>Lets Go</buttonn>
        {/* <select style={{border:'2px solid blue'}} name="" id="">
            <option value="">Type of RelationShip</option>
            <option value="gf">GirlFriend</option>
            <option value="bf">BoyFriend</option>
        </select> */}
    </div>
    <img style={{borderRadius:'1000px',marginTop:'50px',marginBottom:'50px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2ai0sPAH2R8j4i5xvwU6-jUakdVLL-FOlpMdQDYWaDkZM4EZWfz5O1FMogx-eFJ_JbQ&usqp=CAU' />
    </div>
  )
}
