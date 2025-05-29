const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op, where } = require('sequelize')
const { generateUser } = require('../utils/helper');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { userPassTemp } = require('../config/env.config')

class UserService {
  constructor() {
    // this.generate()
  }

  async generate() {

    try {
      try {
        await models.User.truncate({ cascade: true, restartIdentity: true, force: true });
      } catch (error) {
        console.log({ truncateError: error });
      }

      // return
      const salt = await bcrypt.genSalt(12);
      const passHashed = await bcrypt.hash(userPassTemp, salt)

      const admin = generateUser();
      admin.password = passHashed
      admin.email = "admin@admin.cl"
      admin.role = 'admin';

      const seller = generateUser();
      seller.password = passHashed
      seller.email = "seller@gmail.cl"
      seller.role = 'user';

      const users = [admin, seller]

      await models.User.bulkCreate(users);

      for await (const element of [1, 2, 3, 4, 5]) {
        const user = generateUser();
        // const password = await hash(user.password)
        const salt = await bcrypt.genSalt(12);
        const hashed = await bcrypt.hash(user.password, salt)

        await models.User.create({ ...user, password: hashed });
      }
    } catch (error) {
      console.log({ error });
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
      console.log({ type: typeof error });
      console.log(error.isBoom);
      throw new Error(error);
    }
  }

  async resetPassword(id, password) {
    try {
      const salt = await bcrypt.genSalt(12);
      const hashed = await bcrypt.hash(password, salt)
      return await models.User.update({ password: hashed }, { where: { id } })
    } catch (error) {
      throw new Error(error);
    }
  }

  async find() {
    const rta = await models.User.findAll({ attributes: ['id', 'role', 'email', 'createdAt'] });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, { attributes: ['role', 'email', 'createdAt'] })
    if (!user) {
      throw new Error('Usuario no encontrado')
    }
    return user
  }

  async findByEmail(email) {
    const user = await models.User.findOne({ where: { email } })
    if (!user) {
      throw new Error('Usuario no encontrado')
    }

    if (user.length <= 0) {
      throw new Error("Usuario no encontrado");
    }

    return user
  }


  // ⚠️-> be careull with password field, it need more security levels
  async update(id, changes) {
    try {
      await models.User.update({ ...changes }, { where: { id } })
      return await models.User.findByPk(id, { attributes: ['id', 'role', 'email', 'createdAt'] })
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    const userDeleted = await models.User.destroy({ where: { id } })

    if (!userDeleted) {
      throw new Error('Error al eliminar usuario')
    }
    return userDeleted
  }
}

module.exports = UserService
