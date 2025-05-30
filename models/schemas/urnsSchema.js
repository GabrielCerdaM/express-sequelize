module.exports = (dataTypes) => ({
  id: {
    type: dataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: dataTypes.UUIDV4
  },
  name: {
    type: dataTypes.STRING,
    allowNull: false
  },
  wood_type: {
    type: dataTypes.STRING,
    allowNull: false
  },
  model: {
    type: dataTypes.STRING,
    allowNull: false
  },
  price: {
    type: dataTypes.INTEGER,
    allowNull: false
  },
  provider: {
    type: dataTypes.STRING,
    allowNull: true
  },
  location: {
    type: dataTypes.ENUM('store', 'shop'),
    allowNull: false,
    defaultValue: 'store'
  },
  position_store: {
    type: dataTypes.INTEGER,
    allowNull: false,
  },
  received_at: {
    type: dataTypes.DATEONLY,
    allowNull: true
  },
  observations: {
    type: dataTypes.TEXT,
    allowNull: true
  }
})
