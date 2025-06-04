class userController {

  constructor(userService) {
    this.service = userService;
  }

  async find(req, res, next) {
    try {

      const allUsers = await this.service.find();
      res.status(200).json(allUsers)
    } catch (error) {
      next(error)
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params
      const user = await this.service.findOne(id)
      if (!user) {
        throw new Error('Usuario no encontrado')
      }
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const { email, role, password } = req.body
      const user = { email, role, password }
      res.status(200).json(await this.service.create(user))
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params
      const data = req.body

      if (!id) {
        throw new Error("No existe identificador para editar usuario");
      }

      const user = await this.service.findOne(id)

      if (!user) {
        throw new Error('Usuario no encontrado')
      }

      res.status(200).json(await this.service.update(id, data))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params

      const user = await this.service.findOne(id)

      if (!user) {
        throw new Error('Usuario no encontrado')
      }

      const userDeleted = await this.service.delete(id)


      if (!userDeleted) {
        throw new Error("El usuario no ha podido ser borrado");
      }
      res.status(200).json(userDeleted ? true : false)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = userController
