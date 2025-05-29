'use strict';

// const { UserSchema } = require('../db/models/user.model');
const getUserSchema = require('../models/schemas/userSchema')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', getUserSchema(Sequelize));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
