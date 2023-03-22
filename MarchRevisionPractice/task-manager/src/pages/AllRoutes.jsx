import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Login'
import { Signup } from '../components/Signup'
import { Tasks } from './Tasks'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/tasks' element={<Tasks/>} />
    </Routes> 
  )
}
