import React from 'react'
import { type Country } from '../../types'
import { FilterAndSearchForm } from '../filterAndSearchForm/FilterAndSearchForm'
import { CountriesGrid } from '../countriesGrid/CountriesGrid'

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country | null>>
  countries: Country | null
  loading: boolean
}

export const Homepage = ({ loading, countries, setCountries }: Props): JSX.Element => {
  return (
    <>
      <FilterAndSearchForm setCountries={setCountries}/>
      {!loading && <CountriesGrid countries={countries}/>}
    </>
  )
}
