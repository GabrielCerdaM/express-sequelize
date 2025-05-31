const { Model, DataTypes, Sequelize } = require('sequelize')
const SERVICE_TABLE = 'services'
const getServiceSchema = require('./schemas/serviceSchema')
class Services extends Model {
  static associate(models) {
    Services.belongsTo(models.Client, {
      foreignKey: 'client_id',
      as: 'client',
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
      as: 'payment',
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
module.exports = (sequelize) => {
  Services.init(getServiceSchema(DataTypes, Sequelize), Services.config(sequelize))
  return Services
}

// module.exports = { SERVICE_TABLE, ServiceSchema, Services }
