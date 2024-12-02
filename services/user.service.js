const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op } = require('sequelize')
const { generateUser } = require('../utils/helper');
const { hash, compare } = require('../utils/bcrypt')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserService {
  constructor() {
    // this.generate()
  }

  async generate() {
    await models.User.truncate();

    const limit = 5

    const newUser = {
      email: "admin@admin.cl",
      password: "admin"
    }

    const password = await hash(newUser.password)

    await models.User.create({ ...newUser, password });

    for await (const element of [1, 2, 3, 4, 5]) {
      const user = generateUser();
      const password = await hash(user.password)

      await models.User.create({ ...user, password });
      // this.services.push(service)

    }
  }

  async create(data) {
    try {
      const { email, password } = data
      const user = await models.User.findOne({ where: { email } })
      if (user) {
        throw new Error("El correo ya se encuentra registrado");
      }
      const salt = await bcrypt.genSalt(12);
      const hashed = await bcrypt.hash(password, salt)
      const newUser = await models.User.create({ ...data, password: hashed })
      return { id: newUser.id, email: newUser.email, createdAt: newUser.createdAt }
    } catch (error) {
      throw new Error(error);
    }
  }

  async find() {
    const rta = await models.User.findAll({ attributes: ['id','email', 'createdAt'] });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, { attributes: ['email', 'createdAt'] })
    if (!user) {
      // boom.notFound('Usuario no encontrado');
      throw new Error('Usuario no encontrado')
    }
    return user
  }

  // ⚠️-> be careull with password field, it need more security levels
  async update(id, changes) {
    try {
      await models.User.update({ ...changes }, { where: { id } })
      return await models.User.findByPk(id, { attributes: ['id', 'email', 'createdAt'] })
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const userDeleted = await models.User.destroy({ where: { id } })
      console.log({ userDeleted });

      if (!userDeleted) {
        throw new Error('Error al eliminar usuario')
        // boom.badRequest('Error al eliminar usuario')
      }
      return userDeleted
    } catch (error) {
      throw error
    }
  }

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

      const authenticated = await compare(password, user.password)

      if (!authenticated) {
        throw new Error("Credenciales inválidas");
      }

      const token = jwt.sign(
        { email: user.email, createdAt: user.createdAt },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )

      return token;

    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService
