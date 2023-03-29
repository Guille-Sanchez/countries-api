import { type Country } from '../../types'
import './styles.css'

interface Props {
  countries: Country | null
}

export const CountryCard = ({ countries }: Props): JSX.Element => {
  return (
    <>
      {
        countries?.map((country) => {
          return (
            <li key={country.name} className='country-card'>
              <img src={country.flags.png} alt={country.name} loading='lazy'/>
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
