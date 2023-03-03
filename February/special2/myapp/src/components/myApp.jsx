import React ,{useState,useRef,useEffect}from 'react'

export const MyApp = () => {
    const [playeroneRight, setplayeroneRight] = useState(0)
    const [playertwoRight, setplayertwoRight] = useState(0)
    const [playeroneWrong, setplayeroneWrong] = useState(3)
    const [playertwoWrong, setplayertwoWrong] = useState(3)
    const [i, seti] = useState(0)
    // const [j, setj] = useState(0)
    const ref=useRef(null)
    let x=Math.floor(Math.random() * 100)
    let y=Math.floor(Math.random() * 99)
   
    let operator= ['+','-','*','/']
   
    

    const handlePlayerone=()=>{
        if (ref.current !== null) return;
        setInterval(()=>{
           
            if(i==3){
                seti(0)
            }else{
                seti(prev=>prev+1)
            }
           },2000)
        //    
       
    }

    
  




  return (
    <div>
      <h1>{i}</h1>
       <h1>Calculator :- {x}{operator[i]}{y}</h1>

        {/* {operator[i]=="+"?"true":"false"} */}
        <input type="text" placeholder='player one' />
        <button  onClick={handlePlayerone} >Submit</button>
        <input type="text" placeholder='player two' />
        {/* <button onClick={handlePlayertwo}>Submit</button> */}
    </div>
  )
}
