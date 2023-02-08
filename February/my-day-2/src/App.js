import logo from './logo.svg';
import './App.css';
import { Input } from './components/Input';
import { Ui } from './components/Ui';
import { useState } from 'react';
function App() {
  const [input,setInput]=useState(false)
const [names,setnames]=useState({})
  const addName=(name)=>{
     setnames(name) 
     setTimeout(()=>{
      setInput(true)
     },1000) 
  }

  console.log("hgffggh",names)

  return (
    <div style={{background:'red',height:'100%',width:'100%'}}  className="App">

{
  input ? <Ui names={names}/>: <Input addName={addName}/> 
}
        

      
        
        
      


    </div>
  );
}

export default App;
