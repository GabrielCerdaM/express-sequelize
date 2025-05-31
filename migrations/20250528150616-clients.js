'use strict';

// const { ClientSchema } = require('../db/models/client.model');
const getClientSchema = require('../models/schemas/clientSchema')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', getClientSchema(Sequelize.DataTypes, Sequelize, true));
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('clients');
     */
    await queryInterface.dropTable('clients');
  }
};
