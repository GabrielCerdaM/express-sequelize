'use strict';

const getServiceSchema = require('../models/schemas/serviceSchema')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('services', getServiceSchema(Sequelize.DataTypes, Sequelize, true));
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable(' services');
     */
    await queryInterface.dropTable('services');
  }
};
