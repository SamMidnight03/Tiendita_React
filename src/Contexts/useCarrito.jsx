import { createContext, useState } from "react";

export const carritoContext = createContext(null)

function CarritoProvider({children}) {
    const[carrito, setCarrito] = useState([]);

    function insertProduct(product) {
        setCarrito([...carrito, product])
    }

    function removeProducto(id) {

    }

    return <carritoContext.Provider value={{carrito,insertProduct}}>
        {children}
    </carritoContext.Provider>
}

export default CarritoProvider