const { Model, DataTypes } = require('sequelize')

const CLIENT_TABLE = 'clients'

const ClientSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  rut: {
    type: DataTypes.STRING(12),
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
};


class Client extends Model {
  static associate() { }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: "Client",
      timestamps: false
    }
  }
}

module.exports = { CLIENT_TABLE, ClientSchema, Client }
