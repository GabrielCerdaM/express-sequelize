// seeds/seed-ids.js
const { v4: uuidv4 } = require('uuid');

module.exports = {
  userAdminId: uuidv4(),
  userClientId: uuidv4(),
  userGuestId: uuidv4(),
  clientId: uuidv4(),
  urnId: uuidv4(),
  serviceId: uuidv4(),
  paymentId: uuidv4(),
};
