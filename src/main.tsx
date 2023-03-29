import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkMode } from './context/DarkMode'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkMode>
      <App />
    </DarkMode>
  </React.StrictMode>
)
