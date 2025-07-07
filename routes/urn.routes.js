const express = require('express')

const router = express.Router()

const { urnCreateSchema, updateUrnSchema } = require('../schema/urn.schema')
const service = require('../services/urn.service')
const controller = require('../controller/urn.controller')
const validateSchemaHandler = require('../middlewares/validatorHandler')
const { authenticateToken } = require('../middlewares/authenticateToken')
const urnService = new service();
const urnController = new controller(urnService);

router.get('/', authenticateToken(['user', 'admin']), urnController.find.bind(urnController))
router.get('/:id', authenticateToken(), urnController.findOne.bind(urnController))
router.post('/', authenticateToken(), validateSchemaHandler(urnCreateSchema, 'body'), urnController.create.bind(urnController))
router.patch('/:id', authenticateToken(), urnController.update.bind(urnController))
router.delete('/:id', authenticateToken(), urnController.delete.bind(urnController))

module.exports = router
