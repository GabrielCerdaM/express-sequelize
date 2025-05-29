'use strict';

// const { PaymentSchema } = require('../db/models/payment.model');
const getPaymentSchema = require('../models/schemas/paymentSchema')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('payments', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('payments', getPaymentSchema(Sequelize));
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('payments');
     */
    await queryInterface.dropTable('payments');
  }
};
