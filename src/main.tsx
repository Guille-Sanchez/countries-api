import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkMode } from './context/DarkMode'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { OriginalCountries } from './context/OriginalCountry'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <OriginalCountries>
        <DarkMode>
          <App />
        </DarkMode>
      </OriginalCountries>
    </BrowserRouter>
  </React.StrictMode>
)
