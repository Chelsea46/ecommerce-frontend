import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductAmdminContextProvider from './context/ProductAdminSide.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductAmdminContextProvider>
        <App />
      </ProductAmdminContextProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
