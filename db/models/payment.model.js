// models/Payment.ts
const { Model, DataTypes } = require('sequelize')

const PAYMENT_TABLE = 'payments'

const PaymentSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },
  day_payment: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  method_payment: {
    type: DataTypes.ENUM('efectivo', 'transferencia', 'tarjeta debito', 'tarjeta crédito', 'cheque'),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('confirmado', 'pendiente', 'rechazado'),
    defaultValue: 'pendiente',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

class Payment extends Model {
  static associate() { }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PAYMENT_TABLE,
      modelName: 'Payment',
    }
  }
}

module.exports = { Payment, PaymentSchema, PAYMENT_TABLE }
