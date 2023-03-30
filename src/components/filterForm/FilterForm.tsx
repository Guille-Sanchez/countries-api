import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkMode'
import { filterByRegion } from '../../logic/filterByRegion'
import { type Country } from '../../types'
import './styles.css'
interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
  originalCountries: Country | null
}

export const FilterForm = ({ setCountries, originalCountries }: Props): JSX.Element => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] as const
  const { darkMode } = useContext(DarkModeContext)

  return (
    <form>
        <select
          name="filter-by-region"
          className={`filter-by-region ${darkMode ? 'dark-mode' : 'light-mode'}`}
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
  )
}
