import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { carritoContext } from '../Contexts/useCarrito';

export default function Producte() {
    const { insertProduct } = useContext(carritoContext)
    const params = useParams()

    const [product, setProduct] = useState(null)
    async function fetchProduct() {
        const answer = await fetch("https://fakestoreapi.com/products/" + params.id);
        const data = await answer.json();

        setProduct(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    if (product == null) return <p>Producto no encontrado</p>



    return (

        <div id='PagInfo' className={"category"}>
            <img src={product.image} alt="" />
            <div className='info'>
                <h3>{product.title} <span>${product.price} <a className='cart' onClick={()=> insertProduct(product)} href="#">🛒</a></span></h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
