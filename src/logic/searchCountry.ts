import { useContext } from 'react'
import { originalCountriesContext } from '../context/OriginalCountry'
import { type originalCountry } from '../types'

interface Props {
  country: string
}

interface returnProps {
  countryModal: originalCountry | null
}

export const searchCountry = ({ country }: Props): returnProps => {
  const { originalCountries } = useContext(originalCountriesContext)

  const countryModal = originalCountries?.filter((originalCountry) => {
    return (originalCountry.name.localeCompare(country, 'en', { sensitivity: 'base' }) === 0)
  })[0] ?? null

  return ({ countryModal })
}
