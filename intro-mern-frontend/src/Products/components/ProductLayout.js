import React, { useState } from 'react'
import { Modal } from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Header title="Products app" />
      <AddButton onClick={() => setIsModalOpen(true)} />
      <ListProducts />
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Head>
            Form
          </Modal.Card.Head>
          <Modal.Card.Body>
            Formulario aqui
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  )
}

export default ProductLayout
