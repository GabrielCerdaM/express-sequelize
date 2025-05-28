const express = require('express');
const ServiceService = require('../services/services.service');
const router = express.Router();
const servicesService = new ServiceService();
const validatorHandle = require('../middlewares/validatorHandler')
const { createServiceSchema, updateServiceSchema, getServiceSchema } = require('../schema/service.schema')
const { config } = require('../config/config')

// GET
router.get('/generate', (req, res) => {
  // servicesService.generate();
  const services = servicesService.find()
  return res.status(200).json(services)
})

// GET
router.get('/', async (req, res) => {
})

// GET
router.get('/:id',
  validatorHandle(getServiceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const servicio = await servicesService.findOne(id)
      return res.status(200).json({ servicio })
    } catch (error) {
      next(error)
    }
  })

router.put('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body; //requiere el objeto completo
  res.json({
    message: 'update',
    data: body,
    id
  })
})

//UPDATE parcial
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body;
    const service = await servicesService.update(id, body)
    res.json(service)
  } catch (error) {
    next(error)
  }
})

//SAVE
router.post('/',
  validatorHandle(createServiceSchema, 'body'),
  async (req, res) => {
    const body = req.body
    await servicesService.create(body);
    res.status(201).json({ message: 'created', data: body })
  })

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.status(200).json({ message: 'delete, data:body', id })
})


module.exports = router
