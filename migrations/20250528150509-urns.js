'use strict';

// const { UrnSchema } = require('../models/urn.model');
const getUrnSchema = require('../models/schemas/urnsSchema')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('urns', getUrnSchema(Sequelize.DataTypes, Sequelize, true));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('urns');
  }
};
