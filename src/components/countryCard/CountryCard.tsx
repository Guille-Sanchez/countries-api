import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkMode'
import { type Country } from '../../types'
import './styles.css'
import { Link } from 'react-router-dom'
import { originalCountriesContext } from '../../context/OriginalCountry'

interface Props {
  countries: Country | null
}

export const CountryCard = ({ countries }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { originalCountries } = useContext(originalCountriesContext)
  const gridCountries = (countries != null) ? countries : originalCountries

  return (
    <>
      {
        gridCountries?.map((country) => {
          return (
            <li
              key={country.name}
              className={`country-card ${darkMode ? 'dark-mode' : 'light-mode'}`}
            >
              <Link to={`/${country.name}`} >
                <img src={country.flags.png} alt={country.name} loading='lazy'/>
                <div className='description'>
                  <p>{country.name}</p>
                  <p><span>Population: </span>{country.population.toLocaleString('en-US')}</p>
                  <p><span>Region: </span>{country.region}</p>
                  <p><span>Capital: </span>{country.capital}</p>
                </div>
              </Link>
            </li>
          )
        })
      }
    </>
  )
}
