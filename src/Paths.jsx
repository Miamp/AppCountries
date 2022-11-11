import { Navigate, Route, Routes } from 'react-router-dom'
import FormHandle from './component/docs/FormHandle'
// import FormDebounced from './component/docs/FormDebounced'

import { Countries } from './pages/Countries'
import Country from './pages/Country'

export default function Paths () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/countries' replace />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/country/:code' element={<Country />} />
      <Route path='/404' element={<p className='text-center'> Pagina no encontrada</p>} />
      <Route path='*' element={<Navigate to='/404' />} />

      <Route path='/form' element={<FormHandle />} />
      {/* <Route path='/form' element={<FormDebounced />} /> */}
    </Routes>
  )
}

// /: sirve para hacer una ruta dinámica, cualquier nombre, después puede ser variable
// Recuerda que * sirve para cualquier ruta que no sea una especifica
// Navigate puede recibir una prop que se llama replace la cual se utiliza para eliminar la ruta anterior, en este caso seria para rutas que tienen la principal que redireccionar a un main pero también puede que no se conveniente usar como en un error, donde se queda ciclo la pagina 404, el replace es booleano, por lo que si no se pone valor, se queda en falso
