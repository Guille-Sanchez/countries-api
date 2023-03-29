import { type Country } from '../types'

interface Props {
  e: React.ChangeEvent<HTMLSelectElement>
  originalCountries: Country | null
}

export const filterByRegion = ({ e, originalCountries }: Props): Country | null => {
  const filteredCountries = originalCountries
    ?.filter((country) => {
      return (country.region === e.target.value || e.target.value === 'all')
    }) ?? null

  return (filteredCountries !== null ? [...filteredCountries] : null)
}
