const { DataTypes, Model } = require("sequelize")
const URN_TABLE = 'urns'

// models/urna.js
const UrnSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  tipo_madera: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING, // Ej: económica, estándar, premium
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING, // Ej: "Rosa tallada", "Clásica lisa"
    allowNull: true,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  proveedor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ubicacion: {
    type: DataTypes.ENUM('bodega', 'tienda'),
    defaultValue: 'bodega',
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  fecha_ingreso: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}

class Urn extends Model {
  static associate() { }
  static config(sequelize) {
    return {
      sequelize,
      tableName: URN_TABLE,
      modelName: "Urn",
      timestamps: false
    }
  }
}

module.exports = { URN_TABLE, Urn, UrnSchema }
