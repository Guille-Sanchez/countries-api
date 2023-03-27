import './App.css'
import countires from './mockups/data.json'

function App (): JSX.Element {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'] as const
  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
        <div>
          <button>moon</button>
          <p>Dark Mode</p>
        </div>
      </header>
      <main>
        <div>
          <button>Lupa</button>
          <input type="text" />
        </div>

        <select name="filter-by-region">
          <option value=''>Filter by region</option>
          {
            regions.map((region) => {
              return (<option value={region} key={region}>{region}</option>)
            })
          }
        </select>

        <ul>
          {
            countires.map((country) => {
              return (
                <li key={country.name}>
                  <img src={country.flags.png} alt={country.name} />
                  <div>
                    <p>{country.name}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default App
