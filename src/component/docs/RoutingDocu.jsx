import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from '../Layout'
import { RenderComp } from './RenderComp'

export default function RoutingDocu () {
  return (
  // Eso maneja todas las rutas, por lo que todo se encierra primero aquí
  // Route recibe dos props, el nombre de la url y que componente se carga cuando entra, la primera se conoce como path y segunda element
  // * aplicaría para cualquier ruta que no este, que no encuentre
  // También esta el caso para Navigate que se puede configurar para redirigir
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<RenderComp text='Main' />} />
          <Route path='/about' element={<RenderComp text='About' />} />
          <Route path='*' element={<RenderComp text='Page not found' />} />
          <Route path='/404' element={<Navigate to='/404' />} />
        </Routes>
      </Layout>
    </>
  )
}

// Puedes usar la extension glean para mover componentes a  nuevos archivos
/* RECUERDA CREAR EL NAVIGATE PARA ANCLAR LA PAGINA PRINCIPAL */
