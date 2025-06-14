const Joi = require('joi')

const id = Joi.string().uuid()
const email = Joi.string().email();
// should associate this types with types in JOI VALIDATION
const role = Joi.string().valid('admin', 'user', 'guest', 'client')
const password = Joi.string().min(8).max(50)
const createdAt = Joi.date()

const getSchema = Joi.object({
  id: id,
  email: email,
  role: role,
  createdAt: createdAt,
});

const createSchema = Joi.object({
  email: email.required(),
  role: role.required(),
  password: password.required(),
  createdAt: createdAt
})

const updateSchema = Joi.object({
  email: email,
  role: role,
  password: password,
});

const deleteSchema = Joi.object({
  id: id,
});

module.exports = { createSchema, getSchema, updateSchema, deleteSchema }
