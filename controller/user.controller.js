class userController {

  constructor(userService) {
    this.service = userService;
  }

  async generate() {
    return false;
  }

  async create(req, res, next) {
    try {
      const { email, password } = req.body
      const user = { email, password }
      console.log({user});

      const newUser = await this.service.create(user)
      res.status(200).json({ newUser })
    } catch (error) {
      next(error)
    }
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
      res.status(200).json({ user })
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

      const userUpdated = await this.service.update(id, data)

      res.status(200).json({ userUpdated })
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
      res.status(200).json({ userDeleted })
    } catch (error) {
      next(error)
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const login = await this.service.login(email, password);
      res.status(200).json({ login })
    } catch (error) {
      next(error)
    }
  }

  async logout(req, res, next) { }
  async resetPassword(req, res, next) { }
}

module.exports = userController
