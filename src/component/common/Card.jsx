import { Link } from 'react-router-dom'
import toLowerCase from '../../utils/toLowerCase'

export default function Card ({ ...props }) {
  const { flags, name, cca3 } = props
  const lower = toLowerCase(cca3)

  return (
    <Link className='card' to={`/country/${lower}`}>
      <img src={flags.svg} className='card-img-top' alt={name.common} lazy='loading' />
      <div className='card-body'>
        <h5 className='card-title m-0'>{name.common}</h5>
      </div>
    </Link>
  )
}

// lazy sirve como optimización y hacer que la pagina muestre primero lo de arriba y como vayas bajando cargue lo demás.
