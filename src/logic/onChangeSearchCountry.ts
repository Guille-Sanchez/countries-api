import { type originalCountriesType } from '../types'

interface Props {
  e: React.ChangeEvent<HTMLInputElement>
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>
  originalCountries: originalCountriesType
}

export const onChangeSearchCountry = ({ e, originalCountries, setSearchCountry }: Props): originalCountriesType => {
  if (e.target.value === ' ' && e.target.value.length === 1) return null // Here can be added other type of validations

  const userSearch = e.target.value.toLowerCase().split('')
  setSearchCountry(() => e.target.value)

  const filteredCountries = originalCountries?.filter((country) => {
    const countryName = country.name.toLowerCase()
    return userSearch.every((letter, index) => letter === countryName[index])
  }) ?? null

  return filteredCountries !== null ? [...filteredCountries] : null
}
