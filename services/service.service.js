const models = require('../models/index')

class ServiceService {

  constructor() { }

  async find() {
    try {
      return await models.Service.findAll()
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async findOne(id) {
    try {
      const services = await models.Service.findByPk(id)
      if (!services) {
        throw new Error('No hay registros')
      }
      return services
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async create(data) {
    try {
      return await models.Service.create({ ...data })
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async update(id, changes) {
    try {
      return await models.Service.update({ ...changes }, { where: { id } })
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error(`No se encuentra el registro con id ${id}`);
      }
      return await models.Service.destroy({ where: { id } })
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ServiceService
