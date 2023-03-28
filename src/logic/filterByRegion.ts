import { type Country } from '../types'

interface Props {
  e: React.ChangeEvent<HTMLSelectElement>
  originalCountries: Country | null
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
}
export const filterByRegion = ({ e, originalCountries, setCountries }: Props): void => {
  console.log(e.target.value)
  if (e.target.value === '') return

  const filteredCountries = originalCountries
    ?.filter((country) => {
      console.log(country.region === e.target.value || e.target.value === 'all')

      return (country.region === e.target.value || e.target.value === 'all')
    }) ?? null
  if (filteredCountries !== null) setCountries([...filteredCountries])
}
