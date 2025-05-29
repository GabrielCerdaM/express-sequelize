module.exports = (dataTypes) => ({
  id: {
    type: dataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: dataTypes.UUIDV4
    // defaultValue: type.literal('gen_random_uuid()') // o dataTypes.UUIDV4 si no tienes pgcrypto
  },
  pay_by: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: dataTypes.INTEGER,
    allowNull: false
  },
  day_payment: {
    type: dataTypes.DATEONLY,
    allowNull: false
  },
  method_payment: {
    type: dataTypes.ENUM('efectivo', 'transferencia', 'tarjeta debito', 'tarjeta crédito', 'cheque'),
    allowNull: false
  },
  status: {
    type: dataTypes.ENUM('confirmado', 'pendiente', 'rechazado'),
    allowNull: false,
    defaultValue: 'pendiente'
  },
  service_id: {
    type: dataTypes.UUID,
    allowNull: true,
    references: {
      model: 'services',
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  created_at: {
    allowNull: false,
    type: dataTypes.DATE,
    defaultValue: dataTypes.NOW
  }
})
