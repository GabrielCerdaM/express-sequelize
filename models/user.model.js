const { Model, DataTypes, Sequelize } = require('sequelize')
const USER_TABLE = 'users';
const getUserSchema = require('./schemas/userSchema')
class User extends Model {
  // static -> yo no necesito declarar el objeto para acceder a estos metodos
  // nos ayudara para definir cuales serán las asociaciones
  static associate(models) {
    User.hasMany(models.Payment, { foreignKey: 'user_id', as: 'payments' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  }
}

module.exports = (sequelize) => {
  User.init(getUserSchema(DataTypes, Sequelize), User.config(sequelize))
  return User
}
