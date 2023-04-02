import { useContext } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { DarkModeContext } from './context/DarkMode'
import { Routes, Route } from 'react-router-dom'
import { CountryModal } from './components/countryModal/CountryModal'
import { useScrollToTop } from './hooks/useScrollToTop'
import { Homepage } from './components/homepage/Homepage'
import { useCountries } from './hooks/useCountries'
import { Footer } from './footer/Footer'

function App (): JSX.Element {
  const { darkMode } = useContext(DarkModeContext)

  useScrollToTop()
  useCountries()

  return (
    <div className={`App ${darkMode ? 'App-Dark' : 'App-Light'}`}>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element= {<Homepage />}/>
          <Route path='/:country' element={<CountryModal />}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
