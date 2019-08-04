import React, { useState, useEffect } from 'react'
import Loading from './Loading'

const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeId = setInterval(() => {
      console.log('useEffect!')
      setIsLoading(!isLoading)
    }, 2000)

    return () => clearInterval(timeId)
  })

  useEffect(() => {
    console.log('only once time')
  }, [isLoading])

  return (
    isLoading
    ? <Loading />
    : 'Mostrar listado'
  )
}

export default ListProducts
