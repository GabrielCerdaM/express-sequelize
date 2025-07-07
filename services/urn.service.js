const models = require('../models/index')

class UrnService {
  constructor() { }

  async find() {
    try {
      return await models.Urn.findAll()
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async findOne(id) {
    try {
      const services = await models.Urn.findByPk(id)
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
      if (!data) {
        throw new Error('No se ha proporcionado información para crear el registro');
      }
      if (!data.name || !data.wood_type || !data.model || !data.price || !data.provider || !data.location) {
        throw new Error('Faltan campos obligatorios: name, wood_type, model, price, provider, location');
      }

      // if (data.position_store && typeof data.position_store !== 'number') {
      //   throw new Error('El campo position_store debe ser un número');
      // }

      if (data.received_at && isNaN(Date.parse(data.received_at))) {
        throw new Error('El campo received_at debe ser una fecha válida en formato ISO (YYYY-MM-DD)');
      }

      return await models.Urn.create({ ...data })
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id, changes) {
    try {
      if (!id) {
        throw new Error(`No se encuentra el registro con id ${id}`);
      }
      return await models.Urn.update({ ...changes }, { where: { id } })
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error(`No se encuentra el registro con id ${id}`);
      }
      return await models.Urn.destroy({ where: { id } })
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UrnService;
