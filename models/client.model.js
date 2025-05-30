const { Model } = require("sequelize");

const CLIENT_TABLE = 'clients'
const getClientSchema = require('./schemas/clientSchema')
class Client extends Model {
  static associate(models) {
    // # association User - Client
    Client.belongsTo(models.User, {})

    // # association Client - Services
    Client.hasMany(models.Service, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: "Client",
      timestamps: true
    }
  }
}
// ✅ Aquí exportas una función que define e inicializa el modelo
module.exports = (sequelize, DataTypes) => {
  Client.init(getClientSchema(DataTypes), Client.config(sequelize));
  return Client;
};
