const Joi = require('joi')

const id = Joi.string().uuid();
// const contratante_id = Joi.string().uuid();
// const nombre_fallecido = Joi.string().min(3).max(50);
// const apellido_fallecido = Joi.string().min(3).max(50);
// const rut_fallecido = Joi.string().min(3).max(9);
// const fecha_defuncion = Joi.date().iso();
const type = Joi.string().min(3).max(50);
// const tipo_instalacion = Joi.string().min(3).max(50);
const price = Joi.number().min(100000).max(10000000);
// const carroza = Joi.string().min(3).max(50);
const installed = Joi.date().iso();
const velatory = Joi.string().min(3).max(100);
const place_ceremony = Joi.string().min(3).max(100);
const time_ceremony = Joi.date().iso();
const place_cementery = Joi.string().min(3).max(100);
const time_cementery = Joi.date().iso();
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
  time_cementery
})

const createSchema = Joi.object({
  // contratante_id: contratante_id.required(),
  // nombre_fallecido: nombre_fallecido.required(),
  // apellido_fallecido: apellido_fallecido.required(),
  // rut_fallecido: rut_fallecido.required(),installed
  // fecha_defuncion: fecha_defuncion.required(),
  type: type.required(),
  price: price.required(),
  // tipo_instalacion: tipo_instalacion.required(),
  // carroza: carroza.required(),
  installed: installed,
  velatory: velatory.required(),
  place_ceremony: place_ceremony,
  time_ceremony: time_ceremony,
  place_cementery: place_cementery,
  time_cementery: time_cementery,
  // acompanamiento: acompanamiento.required(),
  // publicacion: publicacion.required(),
  // tarjetas: tarjetas.required(),
})

const updateSchema = Joi.object({
  // contratante_id: contratante_id,
  // nombre_fallecido: nombre_fallecido,
  // apellido_fallecido: apellido_fallecido,
  // rut_fallecido: rut_fallecido,
  // fecha_defuncion: fecha_defuncion,
  type: type,
  // tipo_instalacion: tipo_instalacion,
  price: price,
  // carroza: carroza,
  installed: installed,
  velatory: velatory,
  place_ceremony: place_ceremony,
  time_ceremony: time_ceremony,
  place_cementery: place_cementery,
  time_cementery: time_cementery,
  // acompanamiento: acompanamiento,
  // publicacion: publicacion,
  // tarjetas: tarjetas,
})

const deleteSchema = Joi.object({
  id: id,
});

module.exports = { getSchema, createSchema, updateSchema, deleteSchema }
