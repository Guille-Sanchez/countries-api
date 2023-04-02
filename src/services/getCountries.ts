import { formatCountries } from '../logic/formatCountries'
import { type originalCountriesType, type Country } from '../types'

interface Props {
  setOriginalCountries: React.Dispatch<React.SetStateAction<originalCountriesType>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const getCountries = async ({ setOriginalCountries, setLoading }: Props): Promise<void> => {
  fetch('https://restcountries.com/v3.1/all')
    .then(async (response): Promise<Country | null> => await response.json())
    .then((data): void => {
      const countries = data
      const formattedCountries = formatCountries({ countries })
      console.log(formattedCountries)
      setOriginalCountries(() => formattedCountries)
    })
    .finally(() => { setLoading(false) })
    .catch((e) => { console.log(e) })
}
