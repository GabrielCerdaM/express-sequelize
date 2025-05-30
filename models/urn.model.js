const { Model } = require("sequelize")
const URN_TABLE = 'urns'
const getUrnSchema = require('./schemas/urnsSchema')

class Urn extends Model {
  static associate(models) {
    Urn.hasMany(models.Service, {
      foreignKey: 'urn_id',
      as: 'services',
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

module.exports = (sequelize, DataTypes) => {
  Urn.init(getUrnSchema(DataTypes), Urn.config(sequelize))
  return Urn
}
