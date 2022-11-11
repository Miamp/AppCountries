import axios from 'axios'
import { useEffect, useState, useRef } from 'react'

export default function FormHandle () {
  const [users, setUsers] = useState([])

  const inputRef = useRef()

  // Ejemplo de como tener dos endpoints diferentes para realizar búsquedas de acuerdo a lo necesario
  const searchUsers = async (url = '') => {
    const response = await axios.get(url)
    if (response && response.data) {
      setUsers(response?.data?.users || [])
    }
  }

  /* const searchUsers = async (value = '') => {
    const response = await axios.get(`https://dummyjson.com/users/search?q=${value}&limit=10&select=firstName,image`)
    if (response && response.data) {
      setUsers(response?.data?.users || [])
    }
  } */

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchUser = (`https://dummyjson.com/users/search?q=${inputRef.current.value}&limit=10&select=firstName,image`)
    searchUsers(searchUser)
  }

  // ejemplo de los dos endpoints
  useEffect(() => {
    const getUsers = 'https://dummyjson.com/users?limit=10&select=firstName,image'
    searchUsers(getUsers)
  }, [])

  /*  useEffect(() => {
    searchUsers()
  }, []) */

  return (
    <section className='container py-5'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input className='form-control' type='search' placeholder='Buscar...' name='search' ref={inputRef} />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      <div className='row '>
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

// useRef es un hook que hace referencia a un elemento de html que puedo utilizar en cualquier momento, este debe llevar un ref donde lo quiere referenciar
