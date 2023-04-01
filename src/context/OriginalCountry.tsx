import React, { createContext, useState } from 'react'
import { type originalCountriesType } from '../types'

const initialState = {
  originalCountries: null,
  setOriginalCountries: () => {}
}

interface originalCountriesContextTypes {
  originalCountries: originalCountriesType
  setOriginalCountries: React.Dispatch<React.SetStateAction<originalCountriesType>>
}

interface Props {
  children: React.ReactNode
}

export const originalCountriesContext = createContext<originalCountriesContextTypes>(initialState)

export const OriginalCountries = ({ children }: Props): JSX.Element => {
  const [originalCountries, setOriginalCountries] = useState<originalCountriesType>(null)

  return (
    <originalCountriesContext.Provider value={{ originalCountries, setOriginalCountries }}>
      {children}
    </originalCountriesContext.Provider>
  )
}
