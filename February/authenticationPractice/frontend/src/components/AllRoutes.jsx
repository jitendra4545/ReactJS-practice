import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'
import { Home } from './Home'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/' element={<Home/>} />
    </Routes>
  )
}
