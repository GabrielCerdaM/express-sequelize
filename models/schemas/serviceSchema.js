module.exports = (DataTypes, Sequelize, isMigration = false) => ({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  installed: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  velatory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  place_ceremony: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  time_ceremony: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  place_cementery: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  time_cementery: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  client_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'clients',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  urn_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'urns',  // nombre tabla users
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
