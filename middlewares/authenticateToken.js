const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env.config');
const { de } = require('@faker-js/faker');

const authenticateToken = (requiredRole = []) => (req, res, next) => {

  const authHeader = req.headers.authorization;

  // Validar si hay encabezado y formato esperado
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error("Acceso denegado, token requerido");
  }

  const token = authHeader && authHeader.split(' ')[1] //espera Bearer [Token]

  if (!token) {
    throw new Error('Acceso denegado, token no válido')
  }

  try {
    const decoded = jwt.verify(token, jwtSecret)

    req.user = decoded
    console.log({ decoded });

    if (requiredRole.length > 0) {
      if (!requiredRole.includes(decoded.role)) {
        throw new Error("No tienes los permisos necesarios para realizar esta acción")
      }
    }
    next()
  } catch (error) {
    console.log({ error });

    next(error)
  }
}

module.exports = { authenticateToken }
