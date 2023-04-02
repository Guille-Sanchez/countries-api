import { useContext, useEffect } from 'react'
import { originalCountriesContext } from '../context/OriginalCountry'
import { formatCountries } from '../logic/formatCountries'
import countries from '../mockups/data.json'

export const useCountries = (): void => {
  const { setOriginalCountries, setLoading } = useContext(originalCountriesContext)

  useEffect(() => {
    let subscribed = true
    if (subscribed) {
      const formattedCountries = formatCountries({ countries })
      setOriginalCountries(() => formattedCountries)
      setLoading(false)
    }
    return () => {
      subscribed = false
    }
  }, [])
}
