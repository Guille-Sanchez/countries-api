import { useContext, useEffect, useState } from 'react'
import { originalCountriesContext } from '../context/OriginalCountry'
import { formatCountries } from '../logic/formatCountries'
import countries from '../mockups/data.json'

interface returnProps {
  loading: boolean
}

export const useCountries = (): returnProps => {
  const [loading, setLoading] = useState(true)
  const { setOriginalCountries } = useContext(originalCountriesContext)

  useEffect(() => {
    let subscribed = true
    if (subscribed) {
      // Get Countries from API
      const formattedCountries = formatCountries({ countries })
      console.log(formattedCountries)
      setOriginalCountries(() => [...countries])
      setLoading(false)
    }
    return () => {
      subscribed = false
    }
  }, [])

  return ({ loading })
}
