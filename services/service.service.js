const { faker } = require("@faker-js/faker");
const { generateService } = require("../utils/helper");
const boom = require("@hapi/boom");
// const db = require('../models/index')
const models = require('../models/index')
// const { env } = require("../config/env.config");

class ServiceService {

  constructor() {
    // this.generate();
  }

  async generate() {
    const limit = 5
    models.Service.truncate({ cascade: true, force: true, restartIdentity: true })

    for (let index = 0; index < limit; index++) {
      const service = generateService();
      await models.Service.create({ ...service })
    }
  }

  async create(data) {
    // -> FIX
    // const newService = {
    //   id: faker.string.uuid(),
    //   ...data
    // }


    try {
      return await models.Service.create({ ...data })
    } catch (error) {
      return error.message
    }
  }

  async find() {
    try {
      console.log({ models });

      return await models.Service.findAll()
    } catch (error) {
      console.error({ error });
      return error.message
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
      return error.message
    }

  }
  // async findOne(id) {
  //   const index = this.services.findIndex(item => item.id == id);
  //   if (index === -1) {
  //     throw new Error("Servicio no encontrado");
  //   }
  // }

  async update(id, changes) {
    try {
      return await models.Service.update({ ...changes }, { where: { id } })
    } catch (error) {
      console.log({ error });
      return error.message
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error(`No se encuentra el registro con id ${id}`);
      }
      return await models.Service.destroy({ where: { id } })
    } catch (error) {
      return error.message
    }
  }
}

module.exports = ServiceService
