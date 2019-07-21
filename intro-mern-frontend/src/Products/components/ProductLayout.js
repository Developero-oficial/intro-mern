import React from 'react'
import Header from './Header'
import AddButton from './AddButton'
import Loading from './Loading'

const ProductLayout = () => {
  return (
    <>
      <Header title="Products app" />
      <AddButton />
      <Loading />
    </>
  )
}

export default ProductLayout
