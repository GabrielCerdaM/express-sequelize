'use strict';

const { generateUser } = require('../utils/helper');
const { userAdminId, userClientId, userGuestId, userId } = require('../utils/seed-ids')
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

    const guest = generateUser();
    guest.id = userGuestId;
    guest.email = 'guest@gmail.com'
    guest.role = 'guest'
    guest.password = await bcrypt.hash('guest', salt)


    const user = generateUser();
    user.id = userId;
    user.email = 'user@gmail.com'
    user.role = 'user'
    user.password = await bcrypt.hash('user', salt)

    const client = generateUser();
    client.id = userClientId;
    client.email = 'client@gmail.com'
    client.role = 'client'
    client.password = await bcrypt.hash('client', salt)

    await queryInterface.bulkInsert('users', [guest, user, admin, client], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
