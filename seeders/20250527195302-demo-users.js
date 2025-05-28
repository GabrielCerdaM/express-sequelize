'use strict';

const { generateUser } = require('../utils/helper');

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
    const salt = await bcrypt.genSalt(12);
    const admin = generateUser();
    admin.role = 'admin';
    admin.password = await bcrypt.hash('admin', salt)

    const user = generateUser();
    user.password = await bcrypt.hash('user', salt)

    console.log({ admin, user });

    // await queryInterface.bulkInsert('User', [user], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('User', null, {});

  }
};
