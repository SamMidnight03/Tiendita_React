import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import Producte from './Pages/Producte'
import Header from './Components/Header'

export default function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path="product/:id" element={<Producte/>}/>
    </Routes>
    </div>
  )
}
