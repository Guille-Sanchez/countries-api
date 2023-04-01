import { useContext, useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { DarkModeContext } from './context/DarkMode'
import { useCountries } from './hooks/useCountries'
import { type Country } from './types'
import { Routes, Route } from 'react-router-dom'
import { CountryModal } from './components/countryModal/CountryModal'
import { useScrollToTop } from './hooks/useScrollToTop'
import { originalCountriesContext } from './context/OriginalCountry'
import { Homepage } from './components/homepage/Homepage'

function App (): JSX.Element {
  const { originalCountries } = useContext(originalCountriesContext)
  const { loading } = useCountries()
  const [countries, setCountries] = useState<Country | null>(originalCountries)
  const { darkMode } = useContext(DarkModeContext)

  useScrollToTop()

  return (
    <div className={`App ${darkMode ? 'App-Dark' : 'App-Light'}`}>
      <Header/>
      <main>
        <Routes>
          <Route path='/:country' element={<CountryModal />}/>
          <Route path='/' element= {<Homepage setCountries={setCountries} countries={countries} loading={loading}/>}/>
        </Routes>
      </main>

    </div>
  )
}

export default App
