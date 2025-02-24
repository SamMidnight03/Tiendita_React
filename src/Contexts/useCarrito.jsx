import { createContext, useState } from "react";

export const carritoContext = createContext(null)

function CarritoProvider({children}) {
    const[carrito, setCarrito] = useState([]);

    function insertProduct(product) {
        setCarrito([...carrito, product])
    }

    function removeProducto(id) {
        setCarrito(producto =>{
            let nuevoCarrito = [...producto];
            nuevoCarrito.splice(id, 1);
            return nuevoCarrito
        })
    }

    return <carritoContext.Provider value={{carrito,insertProduct, removeProducto}}>
        {children}
    </carritoContext.Provider>
}

export default CarritoProvider