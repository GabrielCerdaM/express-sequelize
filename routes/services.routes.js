const express = require('express')
const { getSchema, createSchema, updateSchema, deleteSchema } = require('../schema/service.schema')
const validateSchemaHandler = require('../middlewares/validatorHandler')
const { authenticateToken } = require('../middlewares/authenticateToken');

const routes = express.Router()

const service = require('../services/service.service')
const controller = require('../controller/service.controller')

const servicesService = new service()

const serviceController = new controller(servicesService)

routes.get('/', authenticateToken(), serviceController.find.bind(serviceController))
routes.get('/:id', authenticateToken(), serviceController.findOne.bind(serviceController))
routes.post('/', authenticateToken(), validateSchemaHandler(createSchema, 'body'), serviceController.create.bind(serviceController))
routes.patch('/:id', authenticateToken('admin'), validateSchemaHandler(updateSchema, 'body'), serviceController.update.bind(serviceController))
routes.delete('/', authenticateToken('admin'), serviceController.delete.bind(serviceController))

module.exports = routes
