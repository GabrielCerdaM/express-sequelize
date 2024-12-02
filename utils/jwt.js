const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const sign = (input) => {
  const token = jwt.sign(
    input,
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '1h' }
  )

  return token;
}


const verify = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  return decoded
}

module.exports = { sign, verify }
