module.exports = (DataTypes, Sequelize, isMigration = false) => ({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUID
    // defaultValue: type.literal('gen_random_uuid()') // o DataTypes.UUIDV4 si no tienes pgcrypto
  },
  pay_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  day_payment: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  method_payment: {
    type: DataTypes.ENUM('efectivo', 'transferencia', 'tarjeta debito', 'tarjeta crédito', 'cheque'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('confirmado', 'pendiente', 'rechazado'),
    allowNull: false,
    defaultValue: 'pendiente'
  },
  service_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'services',
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
    // defaultValue: DataTypes.NOW,
    // defaultValue: sequelize.literal('NOW()')
  },
  updateAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
    // defaultValue: sequelize.literal('NOW()')
    // defaultValue: DataTypes.NOW
  }
})
