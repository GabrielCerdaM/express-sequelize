'use strict';
const { serviceId, urnId, clientId } = require('../utils/seed-ids')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const services = [{
      id: serviceId,
      type: 'pino fino',
      price: 1600000,
      installed_at: '2024-05-20T10:00:00Z',
      velatory: 'Lugar de velatorio',
      place_ceremony: 'Iglesia donde se realiza el velatorio',
      time_ceremony: '2024-05-20T10:00:00Z',
      place_cementery: 'Cementerio municipal de Melipilla',
      time_cementery: '2024-05-20T10:00:00Z',
      client_id: clientId,
      urn_id: urnId,
    }]
    await queryInterface.bulkInsert('services', services)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {});

  }
};
