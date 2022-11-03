export default function Card ({ name = '', flags }) {
  return (
    <div className='card'>
      <img src={flags.svg} className='card-img-top' alt={name.common} lazy='loading' />
      <div className='card-body'>
        <h5 className='card-title m-0'>{name.common}</h5>
      </div>
    </div>
  )
}

// lazy sirve como optimización y hacer que la pagina muestre primero lo de arriba y como vayas bajando cargue lo demas.
