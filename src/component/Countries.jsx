import { useEffect, useState } from 'react'
import Card from './common/Card'
import Loading from './common/Loading'
/* Método */
import { toast } from 'react-toastify'

export const Countries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { signal, abort } = new AbortController() // Es api del navegador, es un método que permite abortar una petición, sirve para evitar que la api tenga problemas en la resolución de problemas

  const apiUrl = 'https://restcountries.com/v3.1/all'
  const getData = async () => {
    try {
      const request = await fetch(apiUrl, { signal })
      const res = await request.json()
      setCountries(res)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()

    return () => {
      abort()
    }
  }, [])

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  if (loading) return <Loading />

  return (/* loading
  ? (<p> ...Loading </p>)
  : ()  Esta sería una posible opción con el operador ternario */
    <section className='container py-5'>
      <div className='row gy-4'>
        {countries.map((country, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-3'>
            <Card name={country.name} flags={country.flags} />
          </div>
        ))}
      </div>
    </section>
  )
}
