const { Sequelize } = require("sequelize")

class ClientController {
  constructor(clientService) {
    this.clientService = clientService
  }

  async find(req, res, next) {
    try {
      res.status(200).json(await this.clientService.find())
    } catch (error) {
      // res.status(200).json(error.message)
      next(error)
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params
      res.status(200).json(await this.clientService.findOne(id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const payload = req.body
      res.status(200).json(await this.clientService.create({ ...payload }))
    } catch (error) {
      next(error)
      // if (error instanceof Sequelize.UniqueConstraintError) {
      //   // Manejo específico para errores de unicidad
      //   const field = error.errors[0].path;
      //   const value = error.errors[0].value;

      //   // return res.status(500).json({ error: `Ya existe un cliente con el mismo ${field}: ${value}` });
      // }

      // if (error instanceof Sequelize.ValidationError) {
      //   // Otros errores de validación
      //   return res.status(500).json(error.errors.map(err => err.message).join(', '));
      // }

      // // Error genérico no manejado
      // // throw new Error('Error al crear el cliente: ' + error.message);
      // return res.status(500).json({ error: 'Error al crear el cliente: ' + error.message })
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params // should be in url, could be in body
      const payload = req.body
      await this.clientService.update(id, payload)
      return res.status(200).json({ message: 'OK' })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body
      await this.clientService.delete(id)
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ClientController
