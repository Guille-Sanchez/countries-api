import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import IconArrowLeft from '../../assets/icons'
import { DarkModeContext } from '../../context/DarkMode'
import { originalCountriesContext } from '../../context/OriginalCountry'
import './styles.css'

export const CountryModal = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { originalCountries } = useContext(originalCountriesContext)
  const { country } = useParams()
  if (country === undefined) return <p>Sorry an error has occured</p>

  const countryModal = originalCountries?.filter((originalCountry) => {
    return (originalCountry.name.localeCompare(country, 'en', { sensitivity: 'base' }) === 0)
  })[0] ?? null

  if (countryModal === null) return <p>Sorry an error has occured</p>

  return (
    <>
      <button className={`back-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <IconArrowLeft/>
        <Link to='/'>Back</Link>
      </button>

      <article className='country-modal-container'>
        <section aria-labelledby='country-name' className='country-modal-wrapper'>
          <img src={countryModal.flags.png} alt={countryModal.name} />

          <div>
            <header>
              <h1 id='country-name:' className='country-name'> {countryModal.name}</h1>
            </header>
            <p><span>Native Name:</span> {countryModal.nativeName}</p>
            <p><span>Population:</span> {countryModal.population}</p>
            <p><span>Region:</span> {countryModal.region}</p>
            <p><span>Sub Region:</span> {countryModal.subregion}</p>
            <p><span>Capital:</span> {countryModal.capital}</p>
          </div>

          <div>
            <p><span>Top Level Domain:</span> {countryModal.topLevelDomain}</p>
            <div>
              <p><span>Currencies:</span></p>
              <ul>
                {countryModal.currencies?.map((currency) => {
                  return (
                    <li key={`${countryModal.name}-${currency.name}`}>{currency.name}</li>
                  )
                })}
              </ul>
            </div>

            <div>
              <p><span>Languages:</span></p>
              <ul>
                {countryModal.languages?.map((language) => {
                  return (
                    <li key={`${countryModal.name}-${language.name}`}>{language.name}</li>
                  )
                })}
              </ul>
            </div>
          </div>

          <section aria-labelledby='border-countries'>
            <header>
              <h3 id='border-countries'>Border Countries:</h3>
            </header>
            <ul>
              {
                countryModal.borders?.map((border) => {
                  return (
                    <li key={`${countryModal.name}-${border}`}>
                      <button>{border}</button>
                    </li>
                  )
                }) ?? <li><p>This country does not border any other country</p></li>
              }
            </ul>
          </section>
        </section>
      </article>
    </>

  )
}
