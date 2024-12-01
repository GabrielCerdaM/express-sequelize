const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const { body } = req


  const authHeader = req.headers.authorization;
  console.log({authHeader});

  const token = authHeader && authHeader.split(' ')[1] //espera Bearer [Token]

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado, token no válido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(403).json({ message: 'Token no válido o expirado' })
  }
}

module.exports = { authenticateToken }
