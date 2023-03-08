import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0)

    const handleReduce=()=>{
         setCount(prev=>prev-1)
    }

    const handleAdd=()=>{
     setCount(prev=>prev+1)
    }
    
    

  return (
    <div>
      
       <h1>Count value is : {count}</h1>
       <button disabled={count<=0} onClick={handleReduce}>-</button>
       <button  onClick={handleAdd}>+</button>
    </div>
  )
}
