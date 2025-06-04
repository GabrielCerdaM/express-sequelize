const { ur } = require('@faker-js/faker');
const Joi = require('joi')

const id = Joi.string().uuid();
const type = Joi.string().min(3).max(50);
const price = Joi.number().min(100000).max(10000000);
const installed = Joi.date().iso();
const velatory = Joi.string().min(3).max(100);
const place_ceremony = Joi.string().min(3).max(100);
const time_ceremony = Joi.date().iso();
const place_cementery = Joi.string().min(3).max(100);
const time_cementery = Joi.date().iso();
const client_id = Joi.string().uuid();
const urn_id = Joi.string().uuid();
// const contratante_id = Joi.string().uuid();
// const nombre_fallecido = Joi.string().min(3).max(50);
// const apellido_fallecido = Joi.string().min(3).max(50);
// const rut_fallecido = Joi.string().min(3).max(9);
// const fecha_defuncion = Joi.date().iso();
// const tipo_instalacion = Joi.string().min(3).max(50);
// const carroza = Joi.string().min(3).max(50);
// const acompanamiento = Joi.boolean();
// const publicacion = Joi.boolean();
// const tarjetas = Joi.boolean();



const getSchema = Joi.object({
  id,
  type,
  price,
  installed,
  velatory,
  place_ceremony,
  time_ceremony,
  place_cementery,
  time_cementery,
  client_id,
  urn_id
})

const createSchema = Joi.object({
  type: type.required(),
  price: price.required(),
  installed: installed,
  velatory: velatory.required(),
  place_ceremony: place_ceremony,
  time_ceremony: time_ceremony,
  place_cementery: place_cementery,
  time_cementery: time_cementery,
  client_id: client_id.required(),
  urn_id: urn_id.required()
})

const updateSchema = Joi.object({
  type: type,
  price: price,
  installed: installed.optional(),
  velatory: velatory.optional(),
  place_ceremony: place_ceremony.optional(),
  time_ceremony: time_ceremony.optional(),
  place_cementery: place_cementery.optional(),
  time_cementery: time_cementery.optional(),
  client_id: client_id.optional(),
  urn_id: urn_id.optional()
})

const deleteSchema = Joi.object({
  id: id,
});

module.exports = { getSchema, createSchema, updateSchema, deleteSchema }
