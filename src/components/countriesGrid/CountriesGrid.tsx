import { type Country } from '../../types'
import { CountryCard } from '../countryCard/CountryCard'
import './styles.css'

interface Props {
  countries: Country | null
}

export const CountriesGrid = ({ countries }: Props): JSX.Element => {
  return (
    <section className='countries-justify'>
      <ul className='countries-container'>
        <CountryCard countries={countries}/>
      </ul>
    </section>
  )
}
