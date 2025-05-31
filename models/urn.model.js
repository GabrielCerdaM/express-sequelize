const { Model, DataTypes, Sequelize } = require("sequelize")
const URN_TABLE = 'urns'
const getUrnSchema = require('./schemas/urnsSchema')

class Urn extends Model {
  static associate(models) {
    Urn.hasMany(models.Service, {
      foreignKey: 'urn_id',
      as: 'urn',
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: URN_TABLE,
      modelName: "Urn",
      timestamps: true
    }
  }
}

module.exports = (sequelize) => {
  Urn.init(getUrnSchema(DataTypes, Sequelize), Urn.config(sequelize))
  return Urn
}
