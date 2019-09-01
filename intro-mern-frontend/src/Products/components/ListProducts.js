import React, { useState, useEffect } from 'react'
import { getProducts } from '../services'
import Loading from './Loading'


const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect( () => {
    async function loadProducts () {
      const response = await getProducts()

      if (response.status === 200) {
        setProducts(response.data.products)
      }
    }

    loadProducts()
  }, [])

  return (
    isLoading
    ? <Loading />
    : 'Mostrar listado'
  )
}

export default ListProducts
