import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkMode'
import { type Country } from '../../types'
import './styles.css'
import { Link } from 'react-router-dom'

interface Props {
  gridCountries: Country | null
}

export const CountryCard = ({ gridCountries }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
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
