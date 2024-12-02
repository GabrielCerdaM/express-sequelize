const bcrypt = require('bcrypt')

const hash = async (passwordHere) => {
  const salt = await bcrypt.genSalt(12);
  const hashed = await bcrypt.hash(passwordHere, salt); // bcrypt genera el salt automáticamente
  return hashed;
};

const compare = async (input, hash) => {
  return await bcrypt.compare(input, hash);
}


module.exports = { hash, compare }
