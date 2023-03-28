import type React from 'react'
import { type Country } from '../types'

interface Props {
  e: React.FormEvent<HTMLFormElement>
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
  originalCountries: Country | null
}

export const handleOnSubmit = ({ e, setSearchCountry, setCountries, originalCountries }: Props): void => {
  e.preventDefault()
  setSearchCountry(() => '')
  if ((originalCountries === null)) return
  setCountries(() => [...originalCountries])
}
