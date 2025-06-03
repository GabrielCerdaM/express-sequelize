const express = require('express')

const router = express.Router();
const uService = require('../services/user.service');
const userController = require('../controller/user.controller');

const validateSchemaHandler = require('../middlewares/validatorHandler')
const { getSchema, createSchema, updateSchema, deleteSchema } = require('../schema/user.schema')

const { authenticateToken } = require('../middlewares/authenticateToken');
const canEditYourSelf = require('../middlewares/canEditYourSelf');
const userService = new uService();

const controller = new userController(userService);

router.get('/', authenticateToken(), validateSchemaHandler(getSchema, 'params'), (req, res, next) => controller.find(req, res, next))
router.get('/:id', authenticateToken('admin'), validateSchemaHandler(getSchema, 'params'), async (req, res, next) => controller.findOne(req, res, next))
router.post('/', authenticateToken('admin'), validateSchemaHandler(createSchema, 'body'), async (req, res, next) => controller.create(req, res, next))
router.patch('/:id', authenticateToken(), canEditYourSelf, validateSchemaHandler(updateSchema, 'body'), async (req, res, next) => controller.update(req, res, next))
router.delete('/:id', authenticateToken('admin'), validateSchemaHandler(deleteSchema, 'params'), async (req, res, next) => controller.delete(req, res, next))

module.exports = router
