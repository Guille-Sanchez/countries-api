import type React from 'react'
import { type originalCountriesType } from '../types'

interface Props {
  e: React.FormEvent<HTMLFormElement>
  originalCountries: originalCountriesType
}

interface returnProps {
  newCountries: originalCountriesType
}

export const handleOnSubmit = ({ e, originalCountries }: Props): returnProps => {
  e.preventDefault()
  const newCountries = originalCountries !== null ? [...originalCountries] : null
  return ({ newCountries })
}
