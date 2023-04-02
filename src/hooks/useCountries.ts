import { useContext, useEffect } from 'react'
import { originalCountriesContext } from '../context/OriginalCountry'
import { formatCountries } from '../logic/formatCountries'
import countries from '../mockups/data.json'
// import { getCountries } from '../services/getCountries'

export const useCountries = (): void => {
  const { setOriginalCountries, setLoading } = useContext(originalCountriesContext)

  useEffect(() => {
    let subscribed = true
    if (subscribed) {
      const formattedCountries = formatCountries({ countries })
      setOriginalCountries(() => formattedCountries)
      setLoading(false)
      // getCountries({ setOriginalCountries, setLoading })
    }
    return () => {
      subscribed = false
    }
  }, [])
}
