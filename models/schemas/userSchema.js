module.exports = (DataTypes, Sequelize, isMigration = false) => ({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
    // defaultValue: DataTypes.literal('gen_random_uuid()') // o DataTypes.UUIDV4 si no usas extensión pgcrypto
  },
  role: {
    // should associate this types with types in JOI VALIDATION
    type: DataTypes.ENUM('admin', 'user', 'client', 'guest'),
    allowNull: false,
    defaultValue: 'guest'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
    // defaultValue: Sequelize.literal('NOW()')
    // defaultValue: DataTypes.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
    // defaultValue: Sequelize.literal('NOW()')
    // defaultValue: DataTypes.NOW
  }
})
