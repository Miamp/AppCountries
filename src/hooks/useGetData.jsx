import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function useGetData (apiUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { signal, abort } = new AbortController() // Es api del navegador, es un método que permite abortar una petición, sirve para evitar que la api tenga problemas en la resolución de problemas

  const getData = async () => {
    try {
      const request = await fetch(apiUrl, { signal })
      const res = await request.json()
      setData(res)
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
  }, [apiUrl])

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  return { data, loading, error }
}
