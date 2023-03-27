import './App.css'
import { CountriesGrid } from './components/countriesGrid/CountriesGrid'
import { FilterAndSearchForm } from './components/filterAndSearchForm/FilterAndSearchForm'
import { Header } from './components/header/Header'

function App (): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <main>
        <FilterAndSearchForm />
        <CountriesGrid />
      </main>
    </div>
  )
}

export default App
