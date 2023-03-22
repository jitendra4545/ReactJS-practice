import { LOGIN_SUCCESS, SIGNUP_GET_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes"
import axios from "axios"
const signupSuccess=(payload)=>{
    console.log(payload)
 return {
    type:SIGNUP_SUCCESS,payload
 }
}

const getSignupData=(payload)=>{
    return {
        type:SIGNUP_GET_SUCCESS,payload
    }
}


const loginSuccess=()=>{
 return {
    type:LOGIN_SUCCESS
 }
}



export const SignUp=(email,username,password,passwordc)=>(dispatch)=>{
    const payload={
        email,
        username,
        password,
        passwordc
    }
      axios.post(`https://rm-backend.onrender.com/signup`,payload)
      .then((res)=>{
        dispatch(signupSuccess(res.data))
      }).catch(err=>console.log(err))
}



export const getData=()=>(dispatch)=>{
   axios.get(`https://rm-backend.onrender.com/signup`)
   .then((res)=>{
    console.log(res.data)
    dispatch(getSignupData(res.data))
   }).catch(err=>console.log(err))
}


export const LoginFunc=()=>(dispatch)=>{
   try{
dispatch({ type:LOGIN_SUCCESS})
   }catch(err){
    console.log(err)
   } 
}