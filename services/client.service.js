const models = require('../models/index')

class ClientService {
  constructor() { }

  async find() {
    return await models.Client.findAll();
  }
  async findOne(id) {
    return await models.Client.findByPk(id);
  }
  async create(payload) {
    return await models.Client.create({ ...payload });
  }
  async update(id, payload) {
    return await models.Client.update({ ...payload }, { where: { id } });
  }
  async delete(id) {
    return await models.Client.destroy({ where: { id } });
  }
}

module.exports = ClientService
