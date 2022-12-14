// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/index.css'
// import App from './component/App'
// import { Countries } from './component/Countries'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import Paths from './Paths'
import { HelmetProvider } from 'react-helmet-async'
// import RoutingDocu from './component/docs/RoutingDocu'

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
) */

createRoot(document.getElementById('root')).render(
  <>
    {/* <Countries /> */}
    <HelmetProvider>
      <BrowserRouter> {/* Primero se cierra la aplicación nuestra app en Browser Router  */}
        {/* <RoutingDocu /> */}
        <Paths />
        <ToastContainer />
      </BrowserRouter>
    </HelmetProvider>
  </>
)

// react-router-dom -> react
// react-router -> react-native

// Pues colocar el menu aqui en menu, arriba de Routing entre Browser o colocarlo en el componente en este caso RoutingDocu

// Custom Hook es tal cual personal, para resolver una tarea
