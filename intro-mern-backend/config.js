const config = {
  appConfig: {
    port: process.env.APP_PORT
  },
  db: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME
  }
}

module.exports = config
