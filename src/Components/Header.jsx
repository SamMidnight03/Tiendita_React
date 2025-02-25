import React from 'react'
import { Link } from 'react-router'

export default function Header() {
    return (
        <header>
            <h1>✨Tiendita✨</h1>
            <div>
                <Link to="/">Inicio</Link>
                <Link to="/Carrito">🛒</Link>
            </div>
        </header>
    )
}
