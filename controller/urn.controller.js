
class UrnController {
  constructor(urnService) {
    this.urnService = urnService
  }

  async find(req, res, next) {
    try {
      return res.status(200).json(await this.urnService.find())
    } catch (error) {
      next(error)
    }
  }
  async findOne(req, res, next) {
    try {
      const { id } = req.params
      return res.status(200).json(await this.urnService.findOne(id))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const payload = req.body
      return res.status(200).json(await this.urnService.create({ ...payload }))
    } catch (error) {
      next(error)
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params
      if (!id) {
        throw new Error("Id is required for updating a record");
      }

      const payload = req.body
      return res.status(200).json(await this.urnService.update(id, payload))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.body
      if (!id) {
        throw new Error("Id is required for updating a record");
      }

      return res.status(200).json(await this.urnService.delete(id))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UrnController
