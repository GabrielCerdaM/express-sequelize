'use strict';

const { urnId } = require('../utils/seed-ids')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const urns = [{
      id: urnId,
      name: 'Pino Fino',
      wood_type: 'Pino Fino',
      model: 'Trebol',
      price: '200000',
      provider: 'RAZON SOCIAL',
      location: 'store',
      position_store: 5,
      received_at: '2024-05-20T20:00:00Z',
      observations: 'Urna Pino Fino Tipo Trebol Diseño Cruz Paloma',
    }]
    await queryInterface.bulkInsert('urns', urns);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('urns', null, {});
  }
};
