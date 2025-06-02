const boom = require('@hapi/boom')

const validateSchemaHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    // console.log(data);

    const { error } = schema.validate(data);

    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validateSchemaHandler


