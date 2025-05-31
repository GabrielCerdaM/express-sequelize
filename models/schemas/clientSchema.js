module.exports = (DataTypes, Sequelize, isMigration = false) => ({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    // defaultValue: DataTypes.literal('gen_random_uuid()') // o DataTypes.UUIDV4 si no usas pgcrypto
    defaultValue: DataTypes.UUID
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  rut: {
    type: DataTypes.STRING(12),
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users',  // nombre tabla users
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT' // o 'SET NULL' si quieres permitir que cliente quede sin usuario
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
  },
  updateAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
  }
})
