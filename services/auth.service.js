const { Op } = require('sequelize');
const { models } = require('../libs/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthService {

  constructor() { }

  async login(email, password) {
    try {
      const user = await models.User.findOne({
        where: {
          [Op.and]: [{ email: email }]
        }
      })
      if (!user) {
        throw new Error("Credenciales inválidas");
      }

      const authenticated = await bcrypt.compare(password, user.password)

      if (!authenticated) {
        throw new Error("Credenciales inválidas");
      }

      const token = jwt.sign(
        { email: user.email, role:user.role , createdAt: user.createdAt },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )

      return token;

    } catch (error) {
      throw error
    }
  }

}

module.exports = AuthService
