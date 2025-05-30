module.exports = (dataTypes) => ({
  id: {
    allowNull: false,
    primaryKey: true,
    type: dataTypes.UUID
  },
  type: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: dataTypes.INTEGER,
    allowNull: false,
  },
  installed_at: {
    type: dataTypes.DATE,
    allowNull: false,
  },
  velatory: {
    type: dataTypes.STRING,
    allowNull: true,
  },
  place_ceremony: {
    type: dataTypes.STRING,
    allowNull: true,
  },
  time_ceremony: {
    type: dataTypes.DATE,
    allowNull: true,
  },
  place_cementery: {
    type: dataTypes.STRING,
    allowNull: true,
  },
  time_cementery: {
    type: dataTypes.DATE,
    allowNull: true,
  },
  client_id: {
    type: dataTypes.UUID,
    allowNull: false,
    references: {
      model: 'clients',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  urn_id: {
    type: dataTypes.UUID,
    allowNull: false,
    references: {
      model: 'urns',  // nombre tabla users
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT' // o 'SET NULL' si quieres permitir que cliente quede sin usuario
  }
})
