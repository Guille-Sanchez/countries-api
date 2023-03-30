import { type Country } from '../../types'
import { CountryCard } from '../countryCard/CountryCard'
import './styles.css'

interface Props {
  countries: Country | null
  originalCountries: Country | null
}

export const CountriesGrid = ({ countries, originalCountries }: Props): JSX.Element => {
  const gridCountries = countries !== null ? countries : originalCountries

  return (
    <section className='countries-justify'>
      <ul className='countries-container'>
        <CountryCard gridCountries={gridCountries}/>
      </ul>
    </section>
  )
}
