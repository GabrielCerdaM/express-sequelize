const express = require('express')
const router = express.Router()
const clientService = require('../services/client.service')
const clientController = require('../controller/client.controller');
const validateSchemaHandler = require('../middlewares/validatorHandler');
const { createClientSchema, updateClientSchema, getClientSchema, deleteClientSchema } = require('../schema/client.schema');
const { authenticateToken } = require('../middlewares/authenticateToken');
const canEditYourSelf = require('../middlewares/canEditYourSelf');

const service = new clientService();
const controller = new clientController(service)

router.get('/', authenticateToken('admin'), controller.find.bind(controller))
router.get('/:id', authenticateToken('admin'), validateSchemaHandler(getClientSchema, 'params'), controller.findOne.bind(controller))
router.post('/', validateSchemaHandler(createClientSchema, 'body'), controller.create.bind(controller))
router.patch('/:id', authenticateToken(), canEditYourSelf, validateSchemaHandler(updateClientSchema, 'body'), controller.update.bind(controller))
router.delete('/', authenticateToken('admin'), validateSchemaHandler(deleteClientSchema, 'body'), controller.delete.bind(controller))

module.exports = router
