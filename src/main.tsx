import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkMode } from './context/DarkMode'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkMode>
        <App />
      </DarkMode>
    </BrowserRouter>
  </React.StrictMode>
)
