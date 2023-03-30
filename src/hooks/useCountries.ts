import { useEffect, useState } from 'react'
import countries from '../mockups/data.json'
import { type Country } from '../types'

interface returnProps {
  originalCountries: Country | null
  loading: boolean
}

export const useCountries = (): returnProps => {
  const [loading, setLoading] = useState(true)
  const [originalCountries, setOriginalCountries] = useState<Country | null>(null)

  useEffect(() => {
    let subscribed = true
    if (subscribed) {
      setOriginalCountries(() => [...countries])
      setLoading(false)
    }
    return () => {
      subscribed = false
    }
  }, [])

  return ({ originalCountries, loading })
}
