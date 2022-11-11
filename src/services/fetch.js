export const fetch = async ({ url = '', options = {} }) => {
  const response = await fetch(url, options)
  return response.ok && response.json()
}

// el options es para modificar lo que no necesite ponerle al fetch por decir, si quiero que sea un método y este método sea un get entonces lo debemos poner asi, fetch('api', {method: 'GET'}) esto seria como un método o una función debajo del export, esto sirve por si queremos poner mas de una cosa que haga el fetch
