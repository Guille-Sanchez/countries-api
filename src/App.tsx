import { useContext, useState } from 'react'
import './App.css'
import { CountriesGrid } from './components/countriesGrid/CountriesGrid'
import { FilterAndSearchForm } from './components/filterAndSearchForm/FilterAndSearchForm'
import { Header } from './components/header/Header'
import { DarkModeContext } from './context/DarkMode'
import { type Country } from './types'

function App (): JSX.Element {
  const [countries, setCountries] = useState<Country | null>(null)
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`App ${darkMode ? 'App-Dark' : 'App-Light'}`}>
      <Header/>
      <main>
        <FilterAndSearchForm setCountries={setCountries}/>
        <CountriesGrid countries={countries}/>
      </main>
    </div>
  )
}

export default App
