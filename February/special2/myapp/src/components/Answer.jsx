import React,{useState} from 'react'

export const Answer = ({total,seti}) => {
    const [player1, setplayer1] = useState("")
    const [player2, setplayer2] = useState("")

 const handleCompare=()=>{
    if(total==player1){
        alert('success')
       setplayer1("")
        
    }else{
        alert('failure')
    }
 }


const handleComp=()=>{
    if(total==player2){
        alert('success')
        seti((prev)=>prev+1)
        setplayer2("")
    }else{
        alert('failure')
    }
}

  return (
    <div>
         <input value={player1} onChange={(e)=>setplayer1(e.target.value)} type="text" placeholder='player one' />
        <button onClick={handleCompare} >Submit</button>
        <input value={player2} onChange={(e)=>setplayer2(e.target.value)}  type="text" placeholder='player two' />
        <button onClick={handleComp}>Submit</button>
    </div>
  )
}
