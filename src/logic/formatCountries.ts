import { type originalCountriesType, type Countries, type Country } from '../types'

interface Props {
  countries: Country | null
}

interface formatBordersInterface {
  country: Countries
}

export const formatCountries = ({ countries }: Props): originalCountriesType => {
  const formatBorders = ({ country }: formatBordersInterface): string[] | null => {
    const borders = country.borders

    if (borders === null) return null
    const borderCountry: string[] | null = []

    borders?.forEach((border) => {
      countries?.forEach((rawCountry) => {
        if (border === rawCountry.alpha3Code) {
          const match = rawCountry.name.match(/^[^(]*/)
          borderCountry.push((match != null) ? match[0].trim() : rawCountry.name)
        }
      })
    })

    return borderCountry.length > 0 ? borderCountry : null
  }

  const originalCountries = countries?.map((country) => {
    const formattedBorders = formatBorders({ country })
    return (
      {
        alpha3Code: country.alpha3Code,
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        nativeName: country.nativeName,
        subregion: country.subregion,
        topLevelDomain: country.topLevelDomain,
        currencies: country.currencies,
        languages: country.languages,
        borders: formattedBorders,
        flags: country.flags
      }
    )
  }) ?? null

  return (originalCountries)
}
