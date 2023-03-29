import React, { useState } from 'react'
import './styles.css'
import { IconMagnifyingGlass } from '../../assets/icons'
import { type Country } from '../../types'
import { useCountries } from '../../hooks/useCountries'
import { filterByRegion } from '../../logic/filterByRegion'
import { handleOnSubmit } from '../../logic/handleOnSubmit'
import { onChangeSearchCountry } from '../../logic/onChangeSearchCountry'
interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
}

export const FilterAndSearchForm = ({ setCountries }: Props): JSX.Element => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] as const
  const [searchCountry, setSearchCountry] = useState('')
  const { originalCountries } = useCountries({ setCountries })

  return (
    <section className='form-filter-search'>
      <form className='search-country'
        onSubmit={(e) => {
          const { newCountries } = handleOnSubmit({ e, originalCountries })
          setCountries(() => newCountries)
          setSearchCountry(() => '')
        }}
      >
        <button aria-label='search country'>
          <IconMagnifyingGlass fill='#FFFFFF'/>
        </button>
        <input
          name='search-country'
          type="text"
          placeholder='Search for a country...'
          autoComplete='off'
          value={searchCountry}
          onChange={(e) => {
            const countriesAfterSearch = onChangeSearchCountry({ e, originalCountries, setSearchCountry })
            if (countriesAfterSearch !== null) {
              setCountries(() => countriesAfterSearch)
            }
          }}
        />
      </form>

      <form>
        <select
          name="filter-by-region"
          className='filter-by-region'
          onChange={(e) => {
            const filteredCountries = filterByRegion({ e, originalCountries })
            if (filteredCountries !== null) {
              setCountries(() => filteredCountries)
            }
          }}
        >
          <option value='all'>Filter by Region</option>
          {
            regions.map((region) => {
              return (<option value={region} key={region}>{region}</option>)
            })
          }
        </select>
      </form>
    </section>
  )
}
