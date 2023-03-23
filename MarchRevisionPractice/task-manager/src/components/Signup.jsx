import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {  SignUp } from '../Redux/AuthReducer/action'

export const Signup = () => {
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [passwordc, setpasswordc] = useState("")

    
    
    const dispatch=useDispatch()

    const {user}=useSelector((store)=>store.AuthReducer)

    console.log(user)


    const handleForm=(e)=>{
        e.preventDefault()
        if(password==passwordc){
            dispatch(SignUp(email,username,password,passwordc))
          
        }else{
            alert('renter the password')
        }
      
    }

  

  return (
     <div >
        <form onSubmit={handleForm} style={{padding:"30px 40px",width:"15%",margin:'auto',backgroundColor:"yellow"} } action="">
            <label htmlFor="">Email</label>
            <br />
            <input placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)} style={{padding:"8px 25px",borderRadius:"7px"}} type="text" />
            <label htmlFor="">User Name</label>
            <br />
            <input value={username} placeholder='enter username' onChange={(e)=>setusername(e.target.value)} style={{padding:"8px 25px",borderRadius:"7px"}} type="text" />
            <label htmlFor="">Password</label>
            <br />
            <input style={{padding:"8px 25px",borderRadius:"7px"}} placeholder="enter password"  onChange={(e)=>setpassword(e.target.value)} type="text" />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input style={{padding:"8px 25px",borderRadius:"7px"}} type="text" placeholder='enter confirm password' value={passwordc} onChange={(e)=>setpasswordc(e.target.value)} />

            <input style={{padding:"8px 75px",borderRadius:"7px",backgroundColor:"black",color:'white'}} type="submit" />
        </form>
        <Link to="/"><button>Go To Login</button></Link>
     </div>
  )
}
