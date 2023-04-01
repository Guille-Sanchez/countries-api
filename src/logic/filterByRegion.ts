import { type originalCountriesType } from '../types'

interface Props {
  e: React.ChangeEvent<HTMLSelectElement>
  originalCountries: originalCountriesType
}

export const filterByRegion = ({ e, originalCountries }: Props): originalCountriesType => {
  const filteredCountries = originalCountries
    ?.filter((country) => {
      return (country.region === e.target.value || e.target.value === 'all')
    }) ?? null

  return (filteredCountries !== null ? [...filteredCountries] : null)
}
