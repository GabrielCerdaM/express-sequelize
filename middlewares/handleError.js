
const logErrors = (err, req, res, next) => {
  next(err)

}

const errorHandle = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  })
}

const boomErrorHandle = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}
module.exports = { logErrors, boomErrorHandle, errorHandle }
