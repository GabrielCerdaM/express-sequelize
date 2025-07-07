module.exports = (DataTypes, Sequelize, isMigration = false) => ({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
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
  sell_status: {
    type: DataTypes.ENUM('available', 'reserved', 'sold', 'out_of_stock'),
    allowNull: false,
    defaultValue: 'available'
  },
  status: {
    type: DataTypes.ENUM('perfect', 'fixable', 'damaged', 'repaired', 'unknown'),
    allowNull: false,
    defaultValue: 'perfect'
  },
  urn_type: {
    type: DataTypes.ENUM('carved', 'smooth', 'complete'),
    allowNull: true,
    defaultValue: null
  },
  carved_detail: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null
  },
  images: {
    type: DataTypes.STRING,
    allowNull: true,
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
    allowNull: true,
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
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: isMigration ? Sequelize.fn('NOW') : Sequelize.literal('NOW()')
    // defaultValue: Sequelize.literal('NOW()')
    // defaultValue: DataTypes.NOW
  }
})
