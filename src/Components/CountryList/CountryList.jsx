import React, { useEffect, useState } from 'react'
// import countriesData from '/src/Data/countriesData.js'
import CountryCard from '../CountryCard/CountryCard'
import CountryListShimmer from '../CountryListShimmer/CountryListShimmer'

export default function CountryList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  // const [filteredData, setQuery] = useFilter(data, () => '')

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])

  if (!countriesData.length) {
    return <CountryListShimmer />
  }

  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
      </div>
    </>
  )
}
