import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getData, LoginFunc } from '../Redux/AuthReducer/action'
export const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
const dispatch=useDispatch()
    const {user,isAuth}=useSelector((store)=>store.AuthReducer)
    const navigate=useNavigate()
    console.log(user,isAuth)
    useEffect(()=>{
        dispatch(getData())
           },[])

    const handleLogin=()=>{
      let filtData=  user.filter((el)=>{
            return el.username==username && el.password==password
        })
      
        if(filtData.length>0){
            dispatch(LoginFunc())
            navigate('/tasks')
        }else{
            alert('hdfs')
        }
    }

  return (
    <div>
       <label htmlFor="">User Name</label>
            <br />
            <input value={username} placeholder='enter username' onChange={(e)=>setusername(e.target.value)} style={{padding:"8px 25px",borderRadius:"7px"}} type="text" />
            <label htmlFor="">Password</label>
            <br />
            <input style={{padding:"8px 25px",borderRadius:"7px"}} placeholder="enter password"  onChange={(e)=>setpassword(e.target.value)} type="text" />
        <button onClick={handleLogin}>Signin</button>
        <Link to="/signup"><button>Go To Register</button></Link>
    </div>
  )
}
