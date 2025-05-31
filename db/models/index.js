
function setupModels(sequelize) {
  // User.init(UserSchema, User.config(sequelizeInstance))
  // Services.init(ServiceSchema, Services.config(sequelizeInstance))
  // Client.init(ClientSchema, Client.config(sequelizeInstance))
  // Payment.init(PaymentSchema, Payment.config(sequelizeInstance))
  // Urn.init(UrnSchema, Urn.config(sequelizeInstance))

  // // # association User - Client
  // User.hasOne(Client, {
  //   onDelete: 'SET NULL',
  //   onUpdate: 'CASCADE'
  // })

  // // # association User - Client
  // Client.belongsTo(User)

  // // # association Client - Services
  // Client.hasMany(Services, {
  //   onDelete: 'SET NULL',
  //   onUpdate: 'CASCADE'
  // })

  // // # association Client - Services
  // Services.belongsTo(Client)

  // // Servicio 1 - N Pagos
  // Services.hasMany(Payment, {
  //   onDelete: 'SET NULL',
  //   onUpdate: 'CASCADE'
  // });

  // Payment.belongsTo(Services);
  // // Payment

  // // Urn
  // Urn.hasMany(Services);
  // Services.belongsTo(Urn)
}

module.exports = setupModels;
