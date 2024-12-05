const jwt = require('jsonwebtoken')

const authorizateToken = (req,res,next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1] // expect Bearer token
    if(!token){
        throw new Error("Acceso denegado, requiere token");
    }

    try {
        const userDecoded = jwt.verify(token, process.env.JWT_SECRET)
        if(userDecoded.role && userDecoded.role !== 'admin'){
          throw new Error("El usuario no posee permisos para realizar esta acción");          
        }
        req.user = decoded
        next()
      } catch (error) {
        return res.status(401).json({ message: error.message })
      }
}
module.exports = authorizateToken