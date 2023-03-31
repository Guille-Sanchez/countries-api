import { useContext, useState } from 'react'
import './App.css'
import { CountriesGrid } from './components/countriesGrid/CountriesGrid'
import { FilterAndSearchForm } from './components/filterAndSearchForm/FilterAndSearchForm'
import { Header } from './components/header/Header'
import { DarkModeContext } from './context/DarkMode'
import { useCountries } from './hooks/useCountries'
import { type Country } from './types'
import { Routes, Route } from 'react-router-dom'
import { CountryModal } from './components/countryModal/CountryModal'
import { useScrollToTop } from './hooks/useScrollToTop'

function App (): JSX.Element {
  const { originalCountries, loading } = useCountries()
  const [countries, setCountries] = useState<Country | null>(originalCountries)
  const { darkMode } = useContext(DarkModeContext)

  useScrollToTop()
  return (
    <div className={`App ${darkMode ? 'App-Dark' : 'App-Light'}`}>
      <Header/>
      <main>
        <FilterAndSearchForm setCountries={setCountries} originalCountries={originalCountries}/>
        <Routes>
          <Route path='/:country' element={<CountryModal originalCountries={originalCountries}/>}/>
          <Route path='/' element= {!loading && <CountriesGrid countries={countries} originalCountries={originalCountries}/>}/>
        </Routes>
      </main>

    </div>
  )
}

export default App
