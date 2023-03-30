import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkMode'
// import { useCountries } from '../../hooks/useCountries'
import { filterByRegion } from '../../logic/filterByRegion'
import { type Country } from '../../types'

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
  originalCountries: Country | null
}

export const FilterForm = ({ setCountries, originalCountries }: Props): JSX.Element => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] as const
  const { darkMode } = useContext(DarkModeContext)
  // const { originalCountries } = useCountries({ setCountries })
  // const { originalCountries } = useCountries()

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
