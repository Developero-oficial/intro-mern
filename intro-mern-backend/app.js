const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/product')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1', productRoutes)

module.exports = app
