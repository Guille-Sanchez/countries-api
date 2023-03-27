import { IconMagnifyingGlass } from '../../assets/icons'
import './styles.css'

export const FilterAndSearchForm = (): JSX.Element => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'] as const

  return (
    <section className='form-filter-search'>
      <div className='search-country'>
        <button aria-label='search country'>
          <IconMagnifyingGlass fill='#FFFFFF'/>
        </button>
        <input
          type="text"
          placeholder='Search for a country...'
        />
      </div>

      <select name="filter-by-region" className='filter-by-region'>
        <option value=''>Filter by Region</option>
        {
          regions.map((region) => {
            return (<option value={region} key={region}>{region}</option>)
          })
        }
      </select>
    </section>
  )
}
