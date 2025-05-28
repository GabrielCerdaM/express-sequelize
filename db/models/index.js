const { User, UserSchema } = require('./user.model')
const { Services, ServiceSchema } = require('./services.model')
const { Client, ClientSchema } = require('./client.model')
const { Payment, PaymentSchema } = require('./payment.model')
const { Urn, UrnSchema } = require('./urn.model')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Services.init(ServiceSchema, Services.config(sequelize))
  Client.init(ClientSchema, Client.config(sequelize))
  Payment.init(PaymentSchema, Payment.config(sequelize))
  Urn.init(UrnSchema, Urn.config(sequelize))

  // # association User - Client
  User.hasOne(Client, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  })

  // # association User - Client
  Client.belongsTo(User)

  // # association Client - Services
  Client.hasMany(Services, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  })

  // # association Client - Services
  Services.belongsTo(Client)

  // Servicio 1 - N Pagos
  Services.hasMany(Payment, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Payment.belongsTo(Services);
  // Payment

  // Urn
  Urn.hasMany(Services);
  Services.belongsTo(Urn)
}

module.exports = setupModels;
