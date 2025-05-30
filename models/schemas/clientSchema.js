module.exports = (dataTypes) => ({
  id: {
    type: dataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    // defaultValue: dataTypes.literal('gen_random_uuid()') // o dataTypes.UUIDV4 si no usas pgcrypto
    defaultValue: dataTypes.UUIDV4
  },
  name: {
    type: dataTypes.STRING(100),
    allowNull: false
  },
  rut: {
    type: dataTypes.STRING(12),
    allowNull: false,
    unique: true
  },
  phone: {
    type: dataTypes.STRING(20),
    allowNull: true
  },
  email: {
    type: dataTypes.STRING(100),
    allowNull: true
  },
  address: {
    type: dataTypes.TEXT,
    allowNull: true
  },
  user_id: {
    type: dataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users',  // nombre tabla users
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT' // o 'SET NULL' si quieres permitir que cliente quede sin usuario
  }
})
