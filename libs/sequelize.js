const { Sequelize } = require('sequelize')

const { dbHost,
  dbDialect,
  dbPort,
  dbName,
  dbUser,
  dbPassword } = require('../config/env.config')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)
const URI = `postgresql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
  dialect: dbDialect,
  retry: {
    max: 3, // intenta hasta 10 veces
  },
  logging: true,
  dialectOptions: {
    connectTimeout: 7000, // Timeout in milliseconds for the initial connection
  },
})

module.exports = sequelize
