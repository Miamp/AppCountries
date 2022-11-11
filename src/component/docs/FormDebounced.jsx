import axios from 'axios'
import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

export default function FormDebounced () {
  /* const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit')
  } */
  const [value, setValue] = useState('')
  const [users, setUsers] = useState([])

  const debouncedValue = useDebounce(value, 500)

  const searchUsers = async () => {
    const response = await axios.get(`https://dummyjson.com/users/search?q=${value}&limit=10&select=firstName,image`)
    if (response && response.data) {
      setUsers(response?.data?.users || [])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }
  /*   useEffect(() => {
      searchUsers()
    }, [value]) */

  useEffect(() => {
    searchUsers()
  }, [debouncedValue])

  return (
    <section className='container py-5'>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input onChange={handleSubmit} className='form-control' type='search' placeholder='Buscar...' />
      </form>
      {/* <h2 className='text-center, text-black'> {value}</h2> */}
      <div className='row '>
        {users.length === 0 && <p>No hay usuarios</p>}
        {users.length !== 0 && <p>Usuarios encontrados</p>}
        {
          users.map((user, id) => (
            <div key={id} className='col-lg-3'>
              <article>
                <img className='img-fluid' src={user.image} alt={user.firstName} />
                <p className='text-center'>{user.firstName}</p>
              </article>
            </div>
          ))
        }
      </div>
    </section>
  )
}

// onChange es para ir dando sugerencias en los formularios pero no es muy optimo, ya que se dispara muchas veces cada que uno escriba, es en tiempo real por lo que puede terminar botando el servidor
// Se puede limitar las propiedad a mostrar de cada consulta del endpoint solo hay que revisar como funciona la api a utilizar
// axios regresa la información en data
/* ? sirve para preguntar, si eso existe, entonces puede utilizar en el caso de no exista se regrese algo, ejemplo
const testObject = {
  name:'Sergio'
}

console.log(testObject?.lastName || 'No se encontró este dato')
*/
/*
Cuando esta vació solo ejecuta una vez, que es cuando carga la pagina pero si queremos que se ejecute cada vez que se cambia cierta variable, se la colocamos en el arreglo ejemplo
  useEffect(() => {
    searchUsers()
  }, [value])

  Vació
  useEffect(() => {
    searchUsers()
  }, [])
*/

// Cuando se utiliza un custom hook se llama casi después de los states
// Si se regresa un estado, esto debe guardarse en una variable
