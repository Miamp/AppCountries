import { NavLink } from 'react-router-dom'

export default function Menu () {
  return (
    <menu className='d-flex justify-content-center '>
      <NavLink className='nav-link mx-4' to='/main'>Main</NavLink>
      <NavLink className='nav-link mx-4' to='/about'>About</NavLink>
    </menu>
  )
}

/* Se puede hacer asi obtener una liga, <a href='/about'>About</a> sin embargo, al hacer esto, e recarga por completo la pag y se pierde el estado de la pagina a sus labores por defecto */
// Lo adecuado es con LINK de react-dom para que se guarde, en este caso se modifican los ancord a, por los Link y los href a to para asi de este modo habilitar el spa, single page application
// NavLink es para colocar un tipo efecto de activo, de en donde estas parado en una pagina, esto se modifica en estilos y solo se coloca asi en el link <NavLink
// Si se coloca doble activo en el main y en la ruta donde estemos, se puede solucionar colocando la ruta especifica del main, PERO RECUERDA COLOCAR UN NAVIGATE PARA QUE NO SALGA ERROR EN LA PRIMERA VEZ QUE CARGUES LA PAGINA
