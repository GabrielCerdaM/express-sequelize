const { Model, DataTypes } = require('sequelize')
const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  role: {
    type: DataTypes.ENUM('admin', 'user', 'client', 'guest'),
    allowNull: false,
    defaultValue: 'guest'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}


class User extends Model {
  // static -> yo no necesito declarar el objeto para acceder a estos metodos
  // nos ayudara para definir cuales serán las asociaciones
  static associate() { }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
