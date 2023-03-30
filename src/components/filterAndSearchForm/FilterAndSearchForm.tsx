import './styles.css'
import { type Country } from '../../types'
import { FilterForm } from '../filterForm/FilterForm'
import { SearchForm } from '../searchForm/SearchForm'
interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
  originalCountries: Country | null
}

export const FilterAndSearchForm = ({ setCountries, originalCountries }: Props): JSX.Element => {
  return (
    <section className='form-filter-search'>
      <SearchForm setCountries={setCountries} originalCountries={originalCountries}/>
      <FilterForm setCountries={setCountries} originalCountries={originalCountries}/>
    </section>
  )
}
