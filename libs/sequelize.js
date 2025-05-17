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
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
})

setupModels(sequelize)

sequelize.sync()

module.exports = sequelize
