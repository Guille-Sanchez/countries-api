import { type Countries, type Country } from '../types'

interface Props {
  countries: Country | null
}

interface originalCountry {
  alpha3Code: string
  name: string
  population: number
  region: string
  capital: string | undefined
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  currencies: Currency[] | undefined
  languages: Language[]
  borders: string[] | null
  flags: Flags
}

export type originalCountriesType = originalCountry[] | null

interface returnProps {
  originalCountries: originalCountriesType
}

export interface Flags {
  svg: string
  png: string
}

export interface Currency {
  code: string
  name: string
  symbol: string
}

export interface Language {
  iso639_1?: string
  iso639_2: string
  name: string
  nativeName?: string
}

interface formatBordersInterface {
  country: Countries
}

export const formatCountries = ({ countries }: Props): returnProps => {
  const formatBorders = ({ country }: formatBordersInterface): string[] | null => {
    const borders = country.borders

    if (borders === null) return null
    const borderCountry: string[] = []

    borders?.forEach((border) => {
      countries?.forEach((rawCountry) => {
        if (border === rawCountry.alpha3Code) {
          const match = rawCountry.name.match(/^[^(]*/)
          borderCountry.push((match != null) ? match[0].trim() : rawCountry.name)
        }
      })
    })

    return borderCountry
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

  return ({ originalCountries })
}
