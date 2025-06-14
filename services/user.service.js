const models = require('../models/index')
const bcrypt = require('bcryptjs')

class UserService {
  constructor() { }

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
    const user = await models.User.findByPk(id, { attributes: ['id', 'role', 'email', 'createdAt'] })
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

  async create(data) {
    try {
      const { email, password } = data
      const user = await models.User.findOne({ where: { email } })
      if (user) {
        throw new Error("El correo ya se encuentra registrado");
      }
      const salt = await bcrypt.genSalt(12);
      const hashed = await bcrypt.hash(password, salt)
      const response = await models.User.create({ ...data, password: hashed })
      return { id: response.id, role: response.role, email: response.email, createdAt: response.createdAt }
    } catch (error) {
      throw new Error(error);
    }
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
    try {
      const userDeleted = await models.User.destroy({ where: { id } })

      if (!userDeleted) {
        throw new Error('Error al eliminar usuario')
      }
      return userDeleted
    } catch (error) {
      throw error
    }

  }
}

module.exports = UserService
