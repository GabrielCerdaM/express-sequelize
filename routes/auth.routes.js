const express = require('express');
const { authenticateToken } = require('../middlewares/authenticateToken');
const AuthController = require('../controller/auth.controller');
const AuthService = require('../services/auth.service');
const UserService = require('../services/user.service');
const MailService = require('../services/email.service');

const authService = new AuthService();
const userService = new UserService()
const emailService = new MailService();

const authController = new AuthController(authService,userService,emailService)

const router = express.Router();



router.post('/login', async (req, res, next) => authController.login(req, res, next))
router.post('/logout', authenticateToken, async (req, res, next) => { }) // deshabilitar token
router.post('/send-email', async (req, res, next) => authController.sendEmail(req,res,next)) // enviar mail con formulario
router.post('/reset-password', async (req, res, next) => authController.resetPassword(req,res,next)) // enviar mail con formulario

module.exports = router
