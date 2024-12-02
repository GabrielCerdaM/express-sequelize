const Joi = require('joi')

const id = Joi.string().uuid();
const contratante_id = Joi.string().uuid();
const nombre_fallecido = Joi.string().min(3).max(50);
const apellido_fallecido = Joi.string().min(3).max(50);
const rut_fallecido = Joi.string().min(3).max(9);
const fecha_defuncion = Joi.date();
const tipo_urna = Joi.string().min(3).max(50);
const tipo_instalacion = Joi.string().min(3).max(50);
const venta = Joi.number().min(100000).max(10000000);
const carroza = Joi.string().min(3).max(50);
const velatorio = Joi.string().min(3).max(100);
const velatorio_hora = Joi.date();
const ceremonia = Joi.string().min(3).max(100);
const ceremonia_hora = Joi.date();
const cementerio = Joi.string().min(3).max(100);
const cementerio_hora = Joi.date();
const acompanamiento = Joi.boolean();
const publicacion = Joi.boolean();
const tarjetas = Joi.boolean();


const createServiceSchema = Joi.object({
  contratante_id: contratante_id.required(),
  nombre_fallecido: nombre_fallecido.required(),
  apellido_fallecido: apellido_fallecido.required(),
  rut_fallecido: rut_fallecido.required(),
  fecha_defuncion: fecha_defuncion.required(),
  tipo_urna: tipo_urna.required(),
  tipo_instalacion: tipo_instalacion.required(),
  venta: venta.required(),
  carroza: carroza.required(),
  velatorio: velatorio.required(),
  velatorio_hora: velatorio_hora,
  ceremonia: ceremonia,
  ceremonia_hora: ceremonia_hora,
  cementerio: cementerio,
  cementerio_hora: cementerio_hora,
  acompanamiento: acompanamiento.required(),
  publicacion: publicacion.required(),
  tarjetas: tarjetas.required(),
})

const updateServiceSchema = Joi.object({
  contratante_id: contratante_id,
  nombre_fallecido: nombre_fallecido,
  apellido_fallecido: apellido_fallecido,
  rut_fallecido: rut_fallecido,
  fecha_defuncion: fecha_defuncion,
  tipo_urna: tipo_urna,
  tipo_instalacion: tipo_instalacion,
  venta: venta,
  carroza: carroza,
  velatorio: velatorio,
  velatorio_hora: velatorio_hora,
  ceremonia: ceremonia,
  ceremonia_hora: ceremonia_hora,
  cementerio: cementerio,
  cementerio_hora: cementerio_hora,
  acompanamiento: acompanamiento,
  publicacion: publicacion,
  tarjetas: tarjetas,
})

const getServiceSchema = Joi.object({
  id: id.required(),
  // contratante_id: contratante_id.required(),
  // nombre_fallecido: nombre_fallecido.required(),
  // apellido_fallecido: apellido_fallecido.required(),
  // rut_fallecido: rut_fallecido.required(),
  // fecha_defuncion: fecha_defuncion.required(),
  // tipo_urna: tipo_urna.required(),
  // tipo_instalacion: tipo_instalacion.required(),
  // venta: venta.required(),
  // carroza: carroza.required(),
  // velatorio: velatorio.required(),
  // velatorio_hora: velatorio_hora,
  // ceremonia: ceremonia,
  // ceremonia_hora: ceremonia_hora,
  // cementerio: cementerio,
  // cementerio_hora: cementerio_hora,
  // acompanamiento: acompanamiento.required(),
  // publicacion: publicacion.required(),
  // tarjetas: tarjetas.required(),
})


module.exports = { createServiceSchema, getServiceSchema, updateServiceSchema }
