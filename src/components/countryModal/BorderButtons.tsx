import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/DarkMode'
import { type originalCountry } from '../../types'
import './border-button.css'

interface Props {
  countryModal: originalCountry
}

export const BorderButtons = ({ countryModal }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <section aria-labelledby='border-countries' className='border-countries'>
      <header>
        <h3 id='border-countries'>Border Countries:</h3>
      </header>

      <ul className='countries-border-container'>
        {
          countryModal?.borders?.map((border) => {
            return (
              <li key={`${countryModal.name}-${border}`}>
                <Link to={`../${border}`}>
                  <button className={`countries-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                    {
                      border
                    }
                  </button>
                </Link>
              </li>
            )
          }) ?? <li><p>This country does not border any other country</p></li>
        }
      </ul>
    </section>
  )
}
