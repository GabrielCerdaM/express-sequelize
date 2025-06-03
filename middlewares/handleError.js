
const logErrors = (err, req, res, next) => {
  console.log({ err: err.message, status: err });
  console.dir(err, { depth: null });
  next(err)
}

const errorHandle = (err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
    from: 'errorHandler'
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
