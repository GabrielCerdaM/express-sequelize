const Joi = require('joi');

// Validación de RUT simple (puedes usar una librería externa si quieres validar formato chileno)
const rutRegex = /^[0-9]+-[0-9kK]{1}$/;

const id = Joi.string().uuid();
const name = Joi.string().max(100);
const rut = Joi.string().pattern(rutRegex);
const phone = Joi.string().max(20).allow(null, '');
const email = Joi.string().max(100).email();
const address = Joi.string();
const user_id = Joi.string().uuid()

// --- CREATE ---
const createClientSchema = Joi.object({
  name: name.required(),
  rut: rut.required(),
  phone: phone.required(),
  email: email.required(),
  address: address.required(),
  user_id: user_id.required()
});

// --- UPDATE ---
const updateClientSchema = Joi.object({
  name: name.optional(),
  rut: rut.optional(),
  phone: phone.optional(),
  email: email.optional(),
  address: address.optional(),
  user_id: user_id.optional(),
}).min(1); // se requiere al menos un campo

// --- GET by ID ---
const getClientSchema = Joi.object({
  id: id.required()
});

// --- DELETE ---
const deleteClientSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createClientSchema,
  updateClientSchema,
  getClientSchema,
  deleteClientSchema,
};
