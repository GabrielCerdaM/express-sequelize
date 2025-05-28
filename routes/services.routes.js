const express = require('express')
const { getSchema, createSchema, updateSchema, deleteSchema } = require('../schema/service.schema')
const validateSchemaHandler = require('../middlewares/validatorHandler')
const routes = express.Router()

const service = require('../services/service.service')
const controller = require('../controller/service.controller')

const servicesService = new service()

const serviceController = new controller(servicesService)

routes.get('/', validateSchemaHandler(getSchema, 'body'), serviceController.find.bind(serviceController))
routes.get('/:id', validateSchemaHandler(getSchema, 'params'), serviceController.findOne.bind(serviceController))
routes.post('/', validateSchemaHandler(createSchema, 'body'), serviceController.create.bind(serviceController))
routes.patch('/:id', validateSchemaHandler(updateSchema, 'body'), serviceController.update.bind(serviceController))
routes.delete('/', validateSchemaHandler(deleteSchema, 'body'), serviceController.delete.bind(serviceController))

module.exports = routes
