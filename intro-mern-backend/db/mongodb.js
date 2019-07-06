const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log('db connected'))

async function connectDb ({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`
  mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = connectDb
