module.exports = (DataTypes, Sequelize, isMigration = false) => ({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUID
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  wood_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location: {
    type: DataTypes.ENUM('store', 'shop'),
    allowNull: false,
    defaultValue: 'store'
  },
  position_store: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  received_at: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  observations: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
    // defaultValue: Sequelize.literal('NOW()')
    // defaultValue: DataTypes.NOW
  },
  updateAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
    // defaultValue: Sequelize.literal('NOW()')
    // defaultValue: DataTypes.NOW
  }
})
