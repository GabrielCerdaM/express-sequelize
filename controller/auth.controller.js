class AuthController {

  constructor(authService, userService, emailService) {
    this.authService = authService
    this.userService = userService
    this.emailService = emailService
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

  async sendEmail(req, res, next) {
    try {
      const { body } = req

      const { email } = body

      if (!email) {
        throw new Error("Email no encontrado");
      }
      const { dataValues: user } = await this.userService.findByEmail(email)

      if (!user) {
        throw new Error("Email no encontrado");
      }

      const token = await this.authService.generateResetPasswordToken(user.email);

      await this.emailService.send(user.email, token)
      // send email service here ->
      res.status(200).json({
        message: "Correo de reestablecimiento de contraseña enviado. Accede al el para reestablecer tu contraseña",
      })
    } catch (error) {
      next(error)
    }

  }

  async resetPassword(req, res, next) {
    try {

      const { token } = req.query

      const { password, password_confirm } = req.body

      if (!password && !password_confirm) {
        throw new Error("La contraseña no puede estar vacia");
      }

      if (password !== password_confirm) {
        throw new Error("Las contraseña deben coincidir");
      }

      if (!token) {
        throw new Error("Para realizar esta acción requiere de un token válido");
      }

      const user = await this.authService.verifyToken(token);

      if (!user) {
        throw new Error("La petición de información no es consistente, el token no es válido");
      }

      const success = await this.userService.resetPassword(user.id, password)

      if (success[0] === 0) {
        throw new Error("No es posible actualizar la contraseña");
      }

      res.status(200).json(true)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = AuthController
