class AuthController {

  constructor(service) {
    this.authService = service
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const login = await this.authService.login(email, password);
      res.status(200).json({ login })
    } catch (error) {
      next(error)
    }
  }

  async logout(req, res, next) { }
  async resetPassword(req, res, next) { }

}

module.exports = AuthController
