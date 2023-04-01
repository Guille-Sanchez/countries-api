import React, { createContext, useState } from 'react'
import { type Country } from '../types'

const initialState = {
  originalCountries: null,
  setOriginalCountries: () => {}
}

interface originalCountriesContextTypes {
  originalCountries: Country | null
  setOriginalCountries: React.Dispatch<React.SetStateAction<Country | null>>
}

interface Props {
  children: React.ReactNode
}

export const originalCountriesContext = createContext<originalCountriesContextTypes>(initialState)

export const OriginalCountries = ({ children }: Props): JSX.Element => {
  const [originalCountries, setOriginalCountries] = useState<Country | null>(null)

  return (
    <originalCountriesContext.Provider value={{ originalCountries, setOriginalCountries }}>
      {children}
    </originalCountriesContext.Provider>
  )
}
