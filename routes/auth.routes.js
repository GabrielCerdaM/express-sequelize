const express = require('express');
const { authenticateToken } = require('../middlewares/authenticateToken');
const AuthController = require('../controller/auth.controller');
const AuthService = require('../services/auth.service');
const authService = new AuthService();
const authController = new AuthController(authService)

const router = express.Router();



router.post('/login', async (req, res, next) => authController.login(req, res, next))
router.post('/logout', authenticateToken, async (req, res, next) => { }) // deshabilitar token
router.post('/reset-password', async (req, res, next) => { }) // enviar mail con formulario

module.exports = router
