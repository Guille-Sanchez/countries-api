import './styles.css'
import { type Country } from '../../types'
import { FilterForm } from '../filterForm/FilterForm'
import { SearchForm } from '../searchForm/SearchForm'
interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
}

export const FilterAndSearchForm = ({ setCountries }: Props): JSX.Element => {
  return (
    <section className='form-filter-search'>
      <SearchForm setCountries={setCountries} />
      <FilterForm setCountries={setCountries} />
    </section>
  )
}
