const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const {
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword
} = config()

const setupModels = require('../db/models/index')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)
const URI = `postgresql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  retry: {
    max: 3, // intenta hasta 10 veces
  },
  logging: true,
  dialectOptions: {
    connectTimeout: 7000, // Timeout in milliseconds for the initial connection
  },
})



setupModels(sequelize)

sequelize.sync()

module.exports = sequelize
