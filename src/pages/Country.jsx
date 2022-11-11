import { Helmet } from 'react-helmet-async'
import { Navigate, useParams } from 'react-router-dom'
import Loading from '../component/common/Loading'
import useGetData from '../hooks/useGetData'

export default function Country () {
  const { code } = useParams() // desestructurando para no recibir el objeto entero, sino su valor

  const apiUrl = `https://restcountries.com/v3.1/alpha/${code}`

  const { data: country, loading, error } = useGetData(apiUrl)

  if (loading) return <Loading />

  if (error !== '') {
    return <Navigate to='/404' />
  }

  const { flags, name } = country[0]

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{name.common}</title>
      </Helmet>
      <section className='container py-5'>
        <article className='text-center'>
          <img width='400px' src={flags.svg} alt={name.common} />
          <h1 className='mt-3'> {name.common} </h1>
        </article>
      </section>
    </>
  )
}

// useParams () devuelve un objeto donde la propiedad hace referencia a la url dinámica, y el valor de este es igual a lo que se le de en la url, ejemplo "[code]":"name"
// La regla de los hooks es que estos deben quedar arriba de los componentes
// Navigate es un componente y useNavigate es un método / función
