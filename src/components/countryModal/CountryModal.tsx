import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import IconArrowLeft from '../../assets/icons'
import { DarkModeContext } from '../../context/DarkMode'
import { searchCountry } from '../../logic/searchCountry'
import { BorderButtons } from './BorderButtons'
import { CountryInformation } from './CountryInformation'
import './styles.css'

export const CountryModal = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { country } = useParams()

  if (country === undefined) return <p>Sorry an error has occured</p>

  const { countryModal } = searchCountry({ country })
  if (countryModal === null) return <p>Sorry an error has occured</p>

  return (
    <article aria-label={`Information about ${countryModal.name}`}>
      <Link to='/'className='link-back-button'>
        <button className={`back-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <IconArrowLeft/>
          Back
        </button>
      </Link>

      <div className='country-modal-card'>
        <div className='country-modal-flag'>
          <img src={countryModal.flags.png} alt={`${countryModal.name}'s flag`} />
        </div>

        <section className={`country-modal-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <header>
            <h2 id='country-name:' className='country-name'> {countryModal.name}</h2>
          </header>
          <CountryInformation countryModal={countryModal} />
          <BorderButtons countryModal={countryModal} />
        </section>
      </div>
    </article>
  )
}
