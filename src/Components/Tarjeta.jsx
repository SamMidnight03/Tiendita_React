import React from 'react'
import { Link } from 'react-router'

export default function Tarjeta({title, price, image, category, id}) {
  return (
    <div id='Tarjeta' className={category}>
        <h3>{title}</h3>    
        <span>${price} <a className='cart' href="#">🛒</a></span>
        <img src={image} alt="" />
        <div className='Button'>
          <Link className="details" to={`/product/${id}`}> More Info</Link>
          
        </div>
    </div>
  )
}
