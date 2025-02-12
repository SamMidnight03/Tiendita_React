import { useEffect, useState } from 'react'
import '../App.css'
import Tarjeta from '../Components/Tarjeta';


function Home() {

  const [item, setItem] = useState();

  async function GetInfo() {
    const answer = await fetch("https://fakestoreapi.com/products");
    const data = await answer.json();
    setItem(data)
    console.log(data)
  }

  useEffect(() => {
    GetInfo()
  }, [])

  if (item == undefined) return <p>Producto no cargado</p>

  return (
    <>
      
        <div className='tienda'>
          {
            item.map((e) => {
              return <Tarjeta key={e.id} id={e.id} category={e.category} title={e.title} price={e.price} image={e.image} ></Tarjeta>
            })
          }
        </div>
    </>
  )
}

export default Home
