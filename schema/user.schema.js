const Joi = require('joi')

const id = Joi.number()
const email = Joi.string().email();
const password = Joi.string().min(8).max(50)
const createdAt = Joi.date()

const getSchema = Joi.object({
  id: id,
  email: email,
  createdAt: createdAt,
});

const createSchema = Joi.object({
  email: email,
  password: password,
  createdAt: createdAt
})

const updateSchema = Joi.object({
  email: email,
  password: password,
});


const deleteSchema = Joi.object({
  id: id,
});

module.exports = { createSchema, getSchema, updateSchema, deleteSchema }
