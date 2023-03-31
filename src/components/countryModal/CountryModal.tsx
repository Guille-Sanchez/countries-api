import { Link, useParams } from 'react-router-dom'
import { type Country } from '../../types'
import './styles.css'

interface Props {
  originalCountries: Country | null
}

export const CountryModal = ({ originalCountries }: Props): JSX.Element => {
  const { country } = useParams()

  if (country === undefined) return <p>Sorry an error has occured</p>

  const countryModal = originalCountries?.filter((originalCountry) => {
    return (originalCountry.name.localeCompare(country, 'en', { sensitivity: 'base' }) === 0)
  })[0] ?? null

  if (countryModal === null) return <p>Sorry an error has occured</p>

  return (
    <>
      <button>
      <Link to='/'>Back</Link>
      </button>
      <div className='country-modal-container'>
        <div className='country-modal-wrapper'>
          <img src={countryModal.flags.png} alt={countryModal.name} />
          <div>
            <p className='country-name'> {countryModal.name}</p>
            <p><span>Native Name:</span> {countryModal.nativeName}</p>
            <p><span>Population:</span> {countryModal.population}</p>
            <p><span>Region:</span> {countryModal.region}</p>
            <p><span>Sub Region:</span> {countryModal.subregion}</p>
            <p><span>Capital:</span> {countryModal.capital}</p>
          </div>

          <div>
            <p><span>Top Level Domain:</span> {countryModal.topLevelDomain}</p>
            <p><span>Currencies:</span>
              <ul>
                {countryModal.currencies?.map((currency) => {
                  return (
                    <li key={`${countryModal.name}-${currency.name}`}>{currency.name}</li>
                  )
                })}
              </ul>
            </p>
            <p><span>Languages:</span>
              <ul>
                {countryModal.languages?.map((language) => {
                  return (
                    <li key={`${countryModal.name}-${language.name}`}>{language.name}</li>
                  )
                })}
              </ul>
            </p>
          </div>

          <h3>Border Countries:</h3>
            <ul>
              {
                countryModal.borders?.map((border) => {
                  return (
                    <li key={countryModal.name}>
                      <button>{border}</button>
                    </li>
                  )
                }) ?? <li><p>This country does not border any other country</p></li>
              }
            </ul>
        </div>
      </div>
    </>

  )
}
