import type React from 'react'
import { type Country } from '../types'

interface Props {
  e: React.FormEvent<HTMLFormElement>
  originalCountries: Country | null
}

interface returnProps {
  newCountries: Country | null
}

export const handleOnSubmit = ({ e, originalCountries }: Props): returnProps => {
  e.preventDefault()
  const newCountries = originalCountries !== null ? [...originalCountries] : null
  return ({ newCountries })
}
