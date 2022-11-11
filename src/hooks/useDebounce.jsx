import { useEffect, useState } from 'react'

export default function useDebounce (value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value])

  return debouncedValue
}

// setTimeout() sirve para ejecutar algo después de cierto tiempo
// se debe desmontar como se ve en el ejemplo para evitar que se vuelva a llamar constantemente
// setInterval() se ejecuta cada cierto tiempo
