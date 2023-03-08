import React,{useState} from 'react'

export const Answer = ({total,seti,setplayeroneRight,setplayertwoRight,setplayeroneWrong,setplayertwoWrong}) => {
    const [player1, setplayer1] = useState("")
    const [player2, setplayer2] = useState("")
   

const handleComp=()=>{
    if(total==player2 && total==player1){
        alert('success')
        seti((prev)=>prev+1)
        setplayer2("")
        setplayer1("")
     setplayeroneRight((prev)=>prev+1)
     setplayertwoRight((prev)=>prev+1)
    }else if(total!=player2 && total==player1){
        alert('success')
        seti((prev)=>prev+1)
        setplayer2("")
        setplayer1("")
     setplayeroneRight((prev)=>prev+1)
     setplayertwoWrong((prev)=>prev-1)
}else if(total==player2 && total!=player1){
    alert('success')
    seti((prev)=>prev+1)
    setplayer2("")
    setplayer1("")
    setplayeroneWrong((prev)=>prev-1)
 setplayertwoRight((prev)=>prev+1)
}else{
    seti((prev)=>prev+1)
    setplayer2("")
    setplayer1("")
    setplayeroneWrong((prev)=>prev-1)
    setplayertwoWrong((prev)=>prev-1) 
}
}
  return (
    <div>
       
         <input value={player1} onChange={(e)=>setplayer1(e.target.value)} type="text" placeholder='player one' />
         <button onClick={handleComp}>Submit</button>
        <input value={player2} onChange={(e)=>setplayer2(e.target.value)}  type="text" placeholder='player two' />
        
    </div>
  )
}
