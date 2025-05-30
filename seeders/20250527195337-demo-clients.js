'use strict';
const { where } = require('sequelize');
const { userClientId, clientId, userGuestId } = require('../utils/seed-ids')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const clients = [{
      id: clientId,
      name: "Nombre Completo CLiente",
      rut: "1.111.111-0",
      phone: "+569 9876 5432",
      email: "email@email.com",
      address: "fake address",
      user_id: userClientId
    }
    ]
    await queryInterface.bulkInsert('clients', clients, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
    // await queryInterface.bulkDelete('clients', { id: clientId }, {});
  }
};
