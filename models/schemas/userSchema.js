module.exports = (dataTypes) => ({
  id: {
    allowNull: false,
    primaryKey: true,
    type: dataTypes.UUID,
    defaultValue: dataTypes.UUIDV4
    // defaultValue: dataTypes.literal('gen_random_uuid()') // o dataTypes.UUIDV4 si no usas extensión pgcrypto
  },
  role: {
    type: dataTypes.ENUM('admin', 'user', 'client', 'guest'),
    allowNull: false,
    defaultValue: 'guest'
  },
  email: {
    allowNull: false,
    type: dataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: dataTypes.STRING
  },
  created_at: {
    allowNull: false,
    type: dataTypes.DATE,
    defaultValue: dataTypes.NOW
  },
  updated_at: {
    allowNull: false,
    type: dataTypes.DATE,
    defaultValue: dataTypes.NOW
  }
})
