
class UrnController {
  constructor(urnService) {
    this.urnService = urnService
  }

  async find(req, res, next) {
    try {
      return await this.urnService.find()
    } catch (error) {
      next(error)
    }
  }
  async findOne(req, res, next) {
    try {
      const { id } = req.params
      return await this.urnService.findOne()
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const payload = req.body
      return await this.urnService.create()
    } catch (error) {
      next(error)
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params
      const payload = req.body
      return await this.urnService.update()
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.body
      return await this.urnService.delete()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UrnController
