class serviceController {

  constructor(servicesService) {
    this.service = servicesService
  }

  async find(req, res, next) {
    try {
      const services = await this.service.find()
      res.status(200).json(services)
    } catch (error) {
      next(error)
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params
      const service = await this.service.findOne(id)
      res.status(200).json(service)
    } catch (error) {
      next(error)
    }

  }

  async create(req, res, next) {
    const {
      type,
      price,
      installed,
      velatory,
      place_ceremony,
      time_ceremony,
      place_cementery,
      time_cementery,
      client_id,
      urn_id
    } = req.body
    try {
      const response = await this.service.create({
        type,
        price,
        installed,
        velatory,
        place_ceremony,
        time_ceremony,
        place_cementery,
        time_cementery,
        client_id,
        urn_id,
      })

      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    const { id } = req.params

    const {
      type
      , price
      , installed
      , velatory
      , place_ceremony
      , time_ceremony
      , place_cementery
      , time_cementery
    } = req.body

    // requiere validar si el registro existe y generar las modificaciones necesarias
    // -> this.service.findOne(id)
    try {
      const service = await this.service.findOne(id)

      if (!service) {
        throw new Error(`No existe el servicio con id ${id}`);
      }

      const response = await this.service.update(id, {
        type
        , price
        , installed
        , velatory
        , place_ceremony
        , time_ceremony
        , place_cementery
        , time_cementery
      })

      res.status(200).send(response)

    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body
      const response = await this.service.delete(id)
      res.status(200).json({ response })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = serviceController
