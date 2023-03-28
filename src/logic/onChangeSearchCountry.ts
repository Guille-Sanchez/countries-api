import { type Country } from '../types'

interface Props {
  e: React.ChangeEvent<HTMLInputElement>
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
  originalCountries: Country | null
}
export const onChangeSearchCountry = ({ e, originalCountries, setCountries, setSearchCountry }: Props): void => {
  if (e.target.value === ' ') return
  if (e.target.value === '' && (originalCountries != null)) {
    setCountries([...originalCountries])
    setSearchCountry(() => e.target.value)
    return
  }
  setSearchCountry(() => e.target.value)

  const arraySearch = e.target.value.toLowerCase().split('')
  const filteredCountries = originalCountries
    ?.filter((country) => {
      const countryName = country.name.toLowerCase()
      const temp = arraySearch.map((letter, index) => {
        return letter === countryName[index]
      })

      const newTemp = [...new Set(temp)]
      if (newTemp.length === 2 || !newTemp[0]) return false
      return true
    }) ?? null

  if (filteredCountries !== null) setCountries([...filteredCountries])
}
