const { Model, DataTypes } = require('sequelize')
const SERVICE_TABLE = 'services'


const ServiceSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  installed: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  velatory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  place_ceremony: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  time_ceremony: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  place_cementery: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  time_cementery: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}

class Services extends Model {

  static associate() { }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICE_TABLE,
      modelName: 'Services',
      timestamps: true
    }
  }
}

module.exports = { SERVICE_TABLE, ServiceSchema, Services }
