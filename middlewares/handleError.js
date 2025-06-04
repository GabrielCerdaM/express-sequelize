
const logErrors = (err, req, res, next) => {
  console.log({ err: err.message, status: err });
  console.dir(err, { depth: null });
  next(err)
}

const errorHandle = (err, req, res, next) => {
  // Si los encabezados ya fueron enviados, delega al manejador de errores por defecto de Express
  if (res.headersSent) {
    return next(err);
  }

  const status = req.status || 500
  return res.status(status).json({
    success: false,
    error: { message: err.message || "Error interno de servidor", }
  })
}

const boomErrorHandle = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    return res.status(output.statusCode).json({ error: output.payload, from: 'BoomErrorHandler' })
  } else {
    next(err)
  }
}
module.exports = { logErrors, boomErrorHandle, errorHandle }
