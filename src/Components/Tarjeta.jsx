import React, { useContext } from 'react'
import { Link } from 'react-router'
import { carritoContext } from '../Contexts/useCarrito'

export default function Tarjeta({title, price, image, category, id}) {
  const {insertProduct}= useContext(carritoContext)

  function agregarCarrito() {
    insertProduct({title, price, image, category, id})
  }
  return (
    <div id='Tarjeta' className={category}>
        <h3>{title}</h3>    
        <span>${price} <a className='cart' onClick={agregarCarrito} href="#">🛒</a></span>
        <img src={image} alt="" />
        <div className='Button'>
          <Link className="details" to={`/product/${id}`}> More Info</Link>
          
        </div>
    </div>
  )
}
