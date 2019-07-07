const Product = require('../models/Product')

async function addProduct (req, res) {
  try {
    const {
      name,
      size,
      unitaryPrice,
      description
    } = req.body

    const product = Product({
      name,
      size,
      unitaryPrice,
      description
    })

    if (req.file) {
      const { filename } = req.file
      product.setImgUrl(filename)
    }

    const productStored = await product.save()

    res.status(201).send({ productStored })
  } catch (e) {
    res.status(500).send({ message: e.message })
  }
}

async function getProducts (req, res) {
  const products = await Product.find().lean().exec()
  res.status(200).send({ products })
}

module.exports = {
  addProduct,
  getProducts
}
