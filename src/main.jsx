// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/index.css'
// import App from './component/App'
import { Countries } from './component/Countries'
import { ToastContainer } from 'react-toastify'

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
) */

createRoot(document.getElementById('root')).render(
  <>
    <Countries />
    <ToastContainer />
  </>
)
