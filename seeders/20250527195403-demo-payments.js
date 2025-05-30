'use strict';

const { paymentId, serviceId } = require('../utils/seed-ids')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const payments = [{
      id: paymentId,
      pay_by: 'Nombre persona que paga',
      amount: 100000,
      day_payment: '2024-05-20T10:00:00Z',
      method_payment: 'tarjeta debito',
      status: 'confirmado',
      service_id: serviceId,
    }]
    await queryInterface.bulkInsert('payments', payments)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payments', null, {});
  }
};
