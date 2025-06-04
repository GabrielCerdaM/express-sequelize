const models = require('../models/index')

class ClientService {
  constructor() { }

  async find() {
    try {
      return await models.Client.findAll();
    } catch (error) {
      throw error
    }
  }
  async findOne(id) {
    try {
      return await models.Client.findByPk(id);
    } catch (error) {
      throw error
    }
  }
  async create(payload) {
    try {
      return await models.Client.create({ ...payload });
    } catch (error) {
      throw error
    }
  }
  async update(id, payload) {
    try {
      return await models.Client.update({ ...payload }, { where: { id } });
    } catch (error) {
      throw error
    }
  }
  async delete(id) {
    try {
      return await models.Client.destroy({ where: { id } });
    } catch (error) {
      throw error
    }
  }
}

module.exports = ClientService
