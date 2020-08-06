import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'
import Form from './Form'
import Loading from './Loading'
import { saveProduct, getProducts } from '../services'

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  async function loadProducts () {
    const response = await getProducts()

    if (response.status === 200) {
      setProducts(response.data.products)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleSubmit = async (data) => {
    await saveProduct(data)
    loadProducts()
    setIsModalOpen(false)
  }

  return (
    <>
      <Header title="Products app" />
      <AddButton onClick={() => setIsModalOpen(true)} />
      {
        isLoading && <Loading />
      }

      {
        !products.length && (
          <h2 className="title has-text-centered">
            You don't have products
          </h2>
        )
      }

      <ListProducts products={products} />
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Head showClose={false}>
            <Modal.Card.Title>
              Add Product
            </Modal.Card.Title>
          </Modal.Card.Head>
          <Modal.Card.Body>
            <Form handleSubmit={handleSubmit} />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  )
}

export default ProductLayout
