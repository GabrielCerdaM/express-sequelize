const { Sequelize } = require('sequelize')

const { dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword } = require('../config/config')

const setupModels = require('../db/models/index')
const { log } = require('handlebars/runtime')

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



// async () => {
//   // await sequelize.drop()
//   await sequelize.models.forEach(tableSchema => {
//     console.log({ tableSchema });

//   });
// }

setupModels(sequelize)
sequelize.sync({ force: true })

module.exports = sequelize
