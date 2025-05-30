// models/Payment.ts
const { Model } = require('sequelize');
const getPaymentSchema = require('./schemas/paymentSchema');
const PAYMENT_TABLE = 'payments'

class Payment extends Model {
  static associate(models) {
    Payment.belongsTo(models.Service, {
      foreignKey: 'service_id',
      as: 'service',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PAYMENT_TABLE,
      modelName: 'Payment',
      timestamps: true
    }
  }
}
// require Schema
module.exports = (sequelize, DataTypes) => {
  Payment.init(getPaymentSchema(DataTypes), Payment.config(sequelize))
  return Payment
}
