export type Country = Countries[]

export interface Countries {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital?: string
  altSpellings?: string[]
  subregion: string
  region: string
  population: number
  latlng?: number[]
  demonym: string
  area?: number
  timezones: string[]
  borders?: string[]
  nativeName: string
  numericCode: string
  flags: Flags
  currencies?: Currency[]
  languages: Language[]
  translations: Translations
  flag: string
  regionalBlocs?: RegionalBloc[]
  cioc?: string
  independent: boolean
  gini?: number
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

export interface Translations {
  br: string
  pt: string
  nl: string
  hr: string
  fa?: string
  de: string
  es: string
  fr: string
  ja: string
  it: string
  hu: string
}

export interface RegionalBloc {
  acronym: string
  name: string
  otherNames?: string[]
  otherAcronyms?: string[]
}

/* Formatting API */

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
