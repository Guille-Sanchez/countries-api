import countries from '../../mockups/data.json'
import './styles.css'

export const CountryCard = (): JSX.Element => {
  return (
    <>
      {
        countries.map((country) => {
          return (
            <li key={country.name} className='country-card'>
              <img src={country.flags.png} alt={country.name} />
              <div className='description'>
                <p>{country.name}</p>
                <p><span>Population: </span>{country.population.toLocaleString('en-US')}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Capital: </span>{country.capital}</p>
              </div>
            </li>
          )
        })
      }
    </>
  )
}
