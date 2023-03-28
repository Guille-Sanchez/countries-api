import { useEffect, useState } from 'react'
import countries from '../mockups/data.json'
import { type Country } from '../types'

interface returnProps {
  originalCountries: Country | null
}

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
}

export const useCountries = ({ setCountries }: Props): returnProps => {
  const [originalCountries, setOriginalCountries] = useState<Country | null>(null)

  useEffect(() => {
    let subscribed = true
    // Get value from API
    if (subscribed) {
      setOriginalCountries(() => [...countries])
      setCountries(() => [...countries])
    }
    return () => {
      subscribed = false
    }
  }, [])

  return ({ originalCountries })
}
