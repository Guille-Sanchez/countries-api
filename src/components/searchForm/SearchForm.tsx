import React, { useContext, useState } from 'react'
import { IconMagnifyingGlass } from '../../assets/icons'
import { DarkModeContext } from '../../context/DarkMode'
import { handleOnSubmit } from '../../logic/handleOnSubmit'
import { onChangeSearchCountry } from '../../logic/onChangeSearchCountry'
import { type Country } from '../../types'
import './styles.css'

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
  originalCountries: Country | null
}

export const SearchForm = ({ setCountries, originalCountries }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const [searchCountry, setSearchCountry] = useState('')

  return (
    <form className={`search-country ${darkMode ? 'dark-mode' : 'light-mode'}`}
      onSubmit={(e) => {
        const { newCountries } = handleOnSubmit({ e, originalCountries })
        setCountries(() => newCountries)
        setSearchCountry(() => '')
      }}
    >
      <button aria-label='search country' className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <IconMagnifyingGlass fill={`${darkMode ? '#FFFFFF' : '#000000'}`}/>
      </button>

      <input
        name='search-country'
        type="text"
        placeholder='Search for a country...'
        autoComplete='off'
        value={searchCountry}
        className={`${darkMode ? 'dark-mode' : 'light-mode'}`}
        onChange={(e) => {
          const countriesAfterSearch = onChangeSearchCountry({ e, originalCountries, setSearchCountry })
          if (countriesAfterSearch !== null) {
            setCountries(() => countriesAfterSearch)
          }
        }}
      />
    </form>
  )
}
