import React, { createContext, useState } from 'react'
import { type originalCountriesType } from '../types'

const initialState = {
  originalCountries: null,
  setOriginalCountries: () => {},
  loading: true,
  setLoading: () => {}
}

interface originalCountriesContextTypes {
  originalCountries: originalCountriesType
  setOriginalCountries: React.Dispatch<React.SetStateAction<originalCountriesType>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
  children: React.ReactNode
}

export const originalCountriesContext = createContext<originalCountriesContextTypes>(initialState)

export const OriginalCountries = ({ children }: Props): JSX.Element => {
  const [originalCountries, setOriginalCountries] = useState<originalCountriesType>(null)
  const [loading, setLoading] = useState(true)

  return (
    <originalCountriesContext.Provider value={{ originalCountries, setOriginalCountries, loading, setLoading }}>
      {children}
    </originalCountriesContext.Provider>
  )
}
