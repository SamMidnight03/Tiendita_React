import React, { useContext } from 'react'
import { carritoContext } from '../Contexts/useCarrito'
import { Link } from 'react-router'

export default function Carrito() {
    const {carrito}=useContext(carritoContext)
  return (
    <main id='carropage'>
        {carrito.map((articulo, index)=>{
            return <div className='carrito' key={index}>
                <h3>{articulo.title}</h3>
                <img src={articulo.image} alt="" />
                <span>{articulo.price}</span>
                
                <Link className="details" to={`/product/${articulo.id}`}> More Info</Link>
                <a className='cart' href="#">⛔</a>
            </div>
        })}
    </main>
)
}