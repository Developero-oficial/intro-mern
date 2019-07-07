const express = require('express')
const productRoutes = require('./routes/product')

const app = express()

app.use('/v1', productRoutes)

module.exports = app
