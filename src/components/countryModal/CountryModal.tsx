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
    <div>
      <button className={`back-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <IconArrowLeft/>
        <Link to='/'>Back</Link>
      </button>

      <div className='country-modal-flag'>
        <img src={countryModal.flags.png} alt={countryModal.name} />
      </div>
    </div>

      <article className='country-modal-container'>
        <section aria-labelledby='country-name' className='country-modal-wrapper'>
          <div>
            <header>
              <h2 id='country-name:' className='country-name'> {countryModal.name}</h2>
            </header>
            <p><b>Native Name:</b> {countryModal.nativeName}</p>
            <p><b>Population:</b> {countryModal.population}</p>
            <p><b>Region:</b> {countryModal.region}</p>
            <p><b>Sub Region:</b> {countryModal.subregion}</p>
            <p><b>Capital:</b> {countryModal.capital}</p>
          </div>

          <article className='secondary'>
            <p><b>Top Level Domain:</b> {countryModal.topLevelDomain}</p>
            <article className='display-in-line'>
              <p><b>Currencies: </b></p>
              <ul>
                {countryModal.currencies?.map((currency) => {
                  return (
                    <li key={`${countryModal.name}-${currency.name}`}>{currency.name}</li>
                  )
                })}
              </ul>
            </article>

            <div className='display-in-line'>
              <p><b>Languages: </b></p>
              <ul>
                {countryModal.languages?.map((language) => {
                  return (
                    <li key={`${countryModal.name}-${language.name}`}>{language.name}</li>
                  )
                })}
              </ul>
            </div>
          </article>

          <section aria-labelledby='border-countries'>
            <header>
              <h3 id='border-countries'>Border Countries:</h3>
            </header>

            <ul className='countries-border-container'>
              {
                countryModal.borders?.map((border) => {
                  return (
                    <li key={`${countryModal.name}-${border}`}>
                      <button className={`countries-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                        <Link to={''}>
                          {originalCountries?.map((country) => {
                            let countryName = ''
                            if (country.alpha3Code === border) {
                              countryName = country.name
                            }
                            const match = countryName.match(/^[^(]*/)
                            return ((match != null) ? match[0].trim() : countryName)
                          })}
                        </Link>

                      </button>
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
