import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import Producte from './Pages/Producte'
import Header from './Components/Header'
import Carrito from './Pages/Carrito'

export default function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path="product/:id" element={<Producte/>}/>
      <Route path="/Carrito" element={<Carrito/>}/>
    </Routes>
    </div>
  )
}
