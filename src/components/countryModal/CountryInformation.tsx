import { type originalCountry } from '../../types'
import './country-information.css'

interface Props {
  countryModal: originalCountry
}

export const CountryInformation = ({ countryModal }: Props): JSX.Element => {
  return (
    <article aria-labelledby='country-name'>
      <div className='country-information'>
        <div>
          <p><b>Native Name:</b> {countryModal.nativeName}</p>
          <p><b>Population:</b> {countryModal.population}</p>
          <p><b>Region:</b> {countryModal.region}</p>
          <p><b>Sub Region:</b> {countryModal.subregion}</p>
          <p><b>Capital:</b> {countryModal.capital}</p>
        </div>

        <article>
          <p><b>Top Level Domain:</b> {countryModal.topLevelDomain}</p>
          <div className='display-in-line'>
            <p><b>Currencies: </b></p>
            <ul>
              {countryModal.currencies?.map((currency) => {
                return (
                  <li key={`${countryModal.name}-${currency.name}`}>{currency.name}</li>
                )
              })}
            </ul>
          </div>

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
      </div>
  </article>
  )
}
