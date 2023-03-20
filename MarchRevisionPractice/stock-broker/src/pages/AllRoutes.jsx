import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Dashboard } from './Dashboard'
import { Portfolio } from './Portfolio'
import { Stocks } from './Stocks'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/stock' element={<Stocks/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        
    </Routes>
  )
}
