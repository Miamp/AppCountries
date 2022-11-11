import { Helmet } from 'react-helmet-async'
import Card from '../component/common/Card'
import Loading from '../component/common/Loading'
/* Método */
import useGetData from '../hooks/useGetData'

export const Countries = () => {
  const apiUrl = 'https://restcountries.com/v3.1/all'

  const { data: countries, loading, error } = useGetData(apiUrl)

  if (loading) return <Loading />

  return (/* loading
  ? (<p> ...Loading </p>)
  : ()  Esta sería una posible opción con el operador ternario */
    <>
      <Helmet prioritizeSeoTags>
        <title> Countries API</title>
      </Helmet>
      <section className='container py-5'>
        <div className='row gy-4'>
          {countries.map((country, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-3'>
              <Card {...country} /> {/* name={country.name} flags={country.flags} */}
            </div>
          ))}
        </div>
        {error !== '' ? <p>{error}</p> : null}
      </section>
    </>
  )
}
