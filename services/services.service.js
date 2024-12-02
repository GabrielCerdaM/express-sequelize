const { faker } = require("@faker-js/faker");
const { generateService } = require("../utils/helper");
const boom = require("@hapi/boom");

class ServiceService {

  constructor() {
    this.services = []
    this.generate();
  }

  async generate() {
    const limit = 100
    this.services = []
    for (let index = 0; index < limit; index++) {
      const service = generateService();
      this.services.push(service)
    }
  }

  async create(data) {
    const newService = {
      id: faker.string.uuid(),
      ...data
    }

    this.services.push({ ...newService })

  }

  async find() {
    return this.services
  }

  async findOne(id) {
    // if (!id) {
    //   return false;
    // }
    const index = this.services.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Servicio no encontrado')
    }
  }

  async update(id, changes) {
    let service;
    const index = this.services.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Servicio no encontrado')
    }
    service = this.services[index];
    this.services[index] = {
      ...service,
      ...changes
    }
  }

  async delete(id) {
    if (!id) {
      return false
    }
    for (let index = 0; index < this.services[index]; index++) {
      const s = array[index];
      if (id === s.id) {
        this.services.splice(index);
        return { id: this.services[index].id }
      }
    }
    return false;
  }
}

module.exports = ServiceService
