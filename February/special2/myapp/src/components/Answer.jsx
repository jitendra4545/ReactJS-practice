import React,{useState} from 'react'

export const Answer = ({total,seti}) => {
    const [player1, setplayer1] = useState("")
    const [player2, setplayer2] = useState("")
    const [playeroneRight, setplayeroneRight] = useState(0)
    const [playertwoRight, setplayertwoRight] = useState(0)
    const [playeroneWrong, setplayeroneWrong] = useState(3)
    const [playertwoWrong, setplayertwoWrong] = useState(3)
//  const handleCompare=()=>{
//     if(total==player1){
//         alert('success')
//        setplayer1("")
        
//     }else{
//         alert('failure')
//     }
//  }


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
        <h1>player1 :-{playeroneRight}    player2 :-{playertwoRight}  </h1>
        <h1>playerw1 :-{playeroneWrong}    playerw2 :-{playertwoWrong}  </h1>
         <input value={player1} onChange={(e)=>setplayer1(e.target.value)} type="text" placeholder='player one' />
         <button onClick={handleComp}>Submit</button>
        <input value={player2} onChange={(e)=>setplayer2(e.target.value)}  type="text" placeholder='player two' />
        
    </div>
  )
}
