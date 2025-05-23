const { User, UserSchema } = require('./user.model')
const { Services, ServiceSchema } = require('./services.model')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Services.init(ServiceSchema, Services.config(sequelize))
}

module.exports = setupModels;
