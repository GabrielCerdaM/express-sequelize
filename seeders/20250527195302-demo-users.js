'use strict';

const { generateUser } = require('../utils/helper');
const { userAdminId, userClientId, userGuestId } = require('../utils/seed-ids')
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(12);
    const admin = generateUser();
    admin.email = 'admin@gmail.com'
    admin.id = userAdminId;
    admin.role = 'admin';
    admin.password = await bcrypt.hash('admin', salt)

    const user = generateUser();
    user.id = userGuestId;
    user.email = 'guest@gmail.com'
    user.role = 'guest'
    user.password = await bcrypt.hash('guest', salt)

    const client = generateUser();
    client.id = userClientId;
    client.email = 'client@gmail.com'
    user.role = 'client'
    client.password = await bcrypt.hash('client', salt)

    console.log({ admin, user, client });

    await queryInterface.bulkInsert('users', [user, admin, client], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
