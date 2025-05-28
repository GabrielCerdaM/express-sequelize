const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const authenticateToken = (requiredRole) => (req, res, next) => {

  const authHeader = req.headers.authorization;

  // Validar si hay encabezado y formato esperado
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Acceso denegado, token requerido' });
  }

  const token = authHeader && authHeader.split(' ')[1] //espera Bearer [Token]

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado, token no válido' })
  }

  try {
    const decoded = jwt.verify(token, jwtSecret)

    req.user = decoded

    if (decoded.role && decoded.role !== requiredRole) {
      throw new Error("No tienes los permisos necesarios para realizar esta acción");
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = { authenticateToken }
