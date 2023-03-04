import React ,{useState,useRef,useEffect}from 'react'
import { Answer } from './Answer'

export const MyApp = () => {
    const [playeroneRight, setplayeroneRight] = useState(0)
    const [playertwoRight, setplayertwoRight] = useState(0)
    const [playeroneWrong, setplayeroneWrong] = useState(3)
    const [playertwoWrong, setplayertwoWrong] = useState(3)
    const [i, seti] = useState(0)
   
  
    let x=Math.floor(Math.random() * 80)
    let y=Math.floor(Math.random() * 20)
   
    let operator= ['+','-','*','/']
   
    

    
let total;
 
  if(i==0 ){
    total=x+y
  }else if(i==1 ){
    total=x-y
  }else if(i==2){
    total=x*y
  }else if(i==3){
    total=x/y
  
  }else{
    seti(0)
  }

 
console.log(total)


  return (
    <div>
      <h1>{i}</h1>
       <h1>Calculator :- {x}{operator[i]}{y}</h1>

       <Answer total={total} seti={seti} />
        {/* <button onClick={handlePlayertwo}>Submit</button> */}
    </div>
  )
}
