import { type originalCountriesType } from '../../types'
import { CountryCard } from '../countryCard/CountryCard'
import './styles.css'

interface Props {
  countries: originalCountriesType
}

export const CountriesGrid = ({ countries }: Props): JSX.Element => {
  return (
    <section className='countries-justify'>
      <ul className='countries-container'>
        <CountryCard countries={countries} />
      </ul>
    </section>
  )
}
