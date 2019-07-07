const express = require('express')
const { addProduct } = require('../controllers/productController')
const api = express.Router()

api.post('/products', addProduct)

module.exports = api
