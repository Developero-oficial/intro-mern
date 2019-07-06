const mongooose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  size: Number,
  unitaryPrice: Number,
  imgUrl: String,
  description: String
}, {
  timestamps: true
})

module.exports = mongooose.model('Products', ProductSchema)
