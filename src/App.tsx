import { useContext, useState } from 'react'
import './App.css'
import { CountriesGrid } from './components/countriesGrid/CountriesGrid'
import { FilterAndSearchForm } from './components/filterAndSearchForm/FilterAndSearchForm'
import { Header } from './components/header/Header'
import { DarkModeContext } from './context/DarkMode'
import { useCountries } from './hooks/useCountries'
import { type Country } from './types'

function App (): JSX.Element {
  const { originalCountries, loading } = useCountries()
  const [countries, setCountries] = useState<Country | null>(originalCountries)
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={`App ${darkMode ? 'App-Dark' : 'App-Light'}`}>
      <Header/>
      <main>
        <FilterAndSearchForm setCountries={setCountries} originalCountries={originalCountries}/>
        {!loading && <CountriesGrid countries={countries} originalCountries={originalCountries}/>}
      </main>
    </div>
  )
}

export default App
