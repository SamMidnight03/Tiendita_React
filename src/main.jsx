import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CarritoProvider from './Contexts/useCarrito.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarritoProvider>
  </StrictMode>
)
