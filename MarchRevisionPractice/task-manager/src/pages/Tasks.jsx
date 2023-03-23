import React from 'react'
import { useSelector } from 'react-redux'
import { TaskInput } from '../components/TaskInput'
import {store} from '../Redux/store'
export const Tasks = () => {
  const {user,isAuth}=useSelector((store)=>store.AuthReducer)
  console.log(isAuth)
console.log(store.getState())
let x=new Date()

console.log(x,user)



  return (
    <div>
       <h3>hello {user[0]?.username}</h3>
       <p>Good to see you here</p>
       <p>Your total tasks for today - 0</p>
       <h4>Tasks for {x.getUTCDate()}-{x.getMonth()+1}-{x.getFullYear()}</h4>
       <TaskInput/>
    </div>
  )
}
