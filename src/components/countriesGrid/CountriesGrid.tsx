import { CountryCard } from '../countryCard/CountryCard'
import './styles.css'

export const CountriesGrid = (): JSX.Element => {
  return (
    <section className='countries-justify'>
      <ul className='countries-container'>
        <CountryCard />
      </ul>
    </section>
  )
}
