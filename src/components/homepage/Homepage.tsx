import React, { useContext, useState } from 'react'
import { type originalCountriesType } from '../../types'
import { FilterAndSearchForm } from '../filterAndSearchForm/FilterAndSearchForm'
import { CountriesGrid } from '../countriesGrid/CountriesGrid'
import { useCountries } from '../../hooks/useCountries'
import { originalCountriesContext } from '../../context/OriginalCountry'

export const Homepage = (): JSX.Element => {
  const { loading } = useCountries()
  const { originalCountries } = useContext(originalCountriesContext)
  const [countries, setCountries] = useState<originalCountriesType>(originalCountries)
  return (
    <>
      <FilterAndSearchForm setCountries={setCountries}/>
      {!loading && <CountriesGrid countries={countries}/>}
    </>
  )
}
