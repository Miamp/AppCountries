// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/index.css'
// import App from './component/App'
// import { Countries } from './component/Countries'
// import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import RoutingDocu from './component/docs/RoutingDocu'

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
) */

createRoot(document.getElementById('root')).render(
  <>
    {/* <Countries /> */}
    {/* <ToastContainer /> */}
    <BrowserRouter> {/* Primero se cierra la aplicación nuestra app en Browser Router  */}
      <RoutingDocu />
    </BrowserRouter>
  </>
)

// react-router-dom -> react
// react-router -> react-native

// Pues colocar el menu aqui en menu, arriba de Routing entre Browser o colocarlo en el componente en este caso RoutingDocu
