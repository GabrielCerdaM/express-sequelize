class serviceController {

  constructor(servicesService) {
    // console.log({ servicesService });
    this.service = servicesService
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
      time_cementery
    } = req.body
    try {
      const response = await this.service.create({
        type
        , price
        , installed
        , velatory
        , place_ceremony
        , time_ceremony
        , place_cementery
        , time_cementery
      })
      console.log({ response });

      res.status(200).json({ response })

    } catch (error) {
      res.status(500).json({ error })
    }
  }

  async find(req, res, next) {
    const services = await this.service.find()
    res.status(200).json({ services })
  }

  async findOne(req, res, next) {
    const { id } = req.params

    console.log({ params: req.params });

    const service = await this.service.findOne(id)
    res.status(200).json({ service })
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

    console.log({
      id
      , type
      , price
      , installed
      , velatory
      , place_ceremony
      , time_ceremony
      , place_cementery
      , time_cementery
    });

    res.status(200).json({ id })
  }

  async delete(req, res, next) {
    const { id } = req.body
    res.status(200).json({ id })
  }
}

module.exports = serviceController
