import Menu from './common/Menu'

export default function Layout ({ children }) {
  return (
    <>
      <Menu />
      {children}
      <footer>
        <p className='text-center'>Footer</p>
      </footer>
    </>
  )
}

// la prop children es para especificar que se va a recibir un componente por prop
