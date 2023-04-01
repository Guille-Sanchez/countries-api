import React, { useContext, useState } from 'react'
import { IconMagnifyingGlass } from '../../assets/icons'
import { DarkModeContext } from '../../context/DarkMode'
import { originalCountriesContext } from '../../context/OriginalCountry'
import { handleOnSubmit } from '../../logic/handleOnSubmit'
import { onChangeSearchCountry } from '../../logic/onChangeSearchCountry'
import { type originalCountriesType } from '../../types'
import './styles.css'

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<originalCountriesType>>
}

export const SearchForm = ({ setCountries }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { originalCountries } = useContext(originalCountriesContext)
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
