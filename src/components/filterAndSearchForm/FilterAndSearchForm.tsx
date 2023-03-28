import React, { useEffect, useState } from 'react'
import './styles.css'
import { IconMagnifyingGlass } from '../../assets/icons'
import countries from '../../mockups/data.json'
import { type Country } from '../../types'
interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
}
export const FilterAndSearchForm = ({ setCountries }: Props): JSX.Element => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] as const
  const [originalCountries, setOriginalCountries] = useState<Country | null>(null)

  useEffect(() => {
    let subscribed = true
    // Get value from API
    if (subscribed) {
      setOriginalCountries(() => countries)
      setCountries(() => countries)
    }
    return () => {
      subscribed = false
    }
  }, [])

  const filterByRegion = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log(e.target.value)
    const filteredCountries = originalCountries
      ?.filter((country) => { return (country.region === e.target.value || e.target.value === 'all') }) ?? null
    if (filteredCountries !== null) setCountries([...filteredCountries])
  }

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

      <select
        name="filter-by-region"
        className='filter-by-region'
        onChange={(e) => { filterByRegion(e) }}
      >
        <option value='all'>Filter by Region</option>
        {
          regions.map((region) => {
            return (<option value={region} key={region}>{region}</option>)
          })
        }
      </select>
    </section>
  )
}
