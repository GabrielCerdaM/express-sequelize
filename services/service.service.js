const { faker } = require("@faker-js/faker");
const { generateService } = require("../utils/helper");
const boom = require("@hapi/boom");
const { models } = require('../libs/sequelize')

class ServiceService {

  constructor() {
    this.generate();
  }

  async generate() {
    const limit = 5
    models.Services.truncate({ cascade: true, force: true, restartIdentity: true })
    for (let index = 0; index < limit; index++) {
      const service = generateService();
      await models.Services.create({ ...service })
    }
  }

  async create(data) {
    console.log({ data });

    const newService = {
      id: faker.string.uuid(),
      ...data
    }

    try {
      return await models.Services.create({ ...newService })
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async find() {
    try {
      return await models.Services.findAll()
    } catch (error) {
      console.error({ error });
    }
  }

  async findOne(id) {
    try {
      const services = await models.Services.findByPk(id)
      console.log({ services });

      if (!services) {
        throw new Error('No hay registros')
      }
      return services
    } catch (error) {

    }

  }
  // async findOne(id) {
  //   const index = this.services.findIndex(item => item.id == id);
  //   if (index === -1) {
  //     throw new Error("Servicio no encontrado");
  //   }
  // }

  // async update(id, changes) {
  //   let service;
  //   const index = this.services.findIndex(item => item.id == id);
  //   if (index === -1) {
  //     throw new Error("Servicio no encontrado");
  //   }
  //   service = this.services[index];
  //   this.services[index] = {
  //     ...service,
  //     ...changes
  //   }
  // }

  // async delete(id) {
  //   if (!id) {
  //     return false
  //   }
  //   for (let index = 0; index < this.services[index]; index++) {
  //     const s = array[index];
  //     if (id === s.id) {
  //       this.services.splice(index);
  //       return { id: this.services[index].id }
  //     }
  //   }
  //   return false;
  // }
}

module.exports = ServiceService
