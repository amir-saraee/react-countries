import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CountryItem from './CountryItem'
import './CountriesList.css'

function CountriesList() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const sendRequest = async () => {
      setLoading(true)
      try {
        const res = await axios.get('https://restcountries.com/v2/all')
        setCountries(res.data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(true)
      }
    }

    sendRequest()
  }, [])

  return (
    <div className='row'>
      {loading && <p className='page-text'>Loading ....</p>}
      {!error &&
        countries &&
        countries.map((item) => <CountryItem item={item} />)}
      {error && (
        <p className='page-text error-text'>
          Something wrong to get data from sever!
        </p>
      )}
    </div>
  )
}

export default CountriesList
