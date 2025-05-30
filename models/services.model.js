const { Model, DataTypes } = require('sequelize')
const SERVICE_TABLE = 'services'
const getServiceSchema = require('./schemas/serviceSchema')
class Services extends Model {
  static associate(models) {
    Services.belongsTo(models.Client, {
      foreignKey: 'client_id',
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    });

    Services.belongsTo(models.Urn, {
      foreignKey: 'urn_id',
      as: 'urn',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    Services.hasMany(models.Payment, {
      foreignKey: 'service_id',
      as: 'payments',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICE_TABLE,
      modelName: 'Service',
      timestamps: true
    }
  }
}
// require Schema
module.exports = (sequelize, DataTypes) => {
  Services.init(getServiceSchema(DataTypes), Services.config(sequelize))
  return Services
}

// module.exports = { SERVICE_TABLE, ServiceSchema, Services }
