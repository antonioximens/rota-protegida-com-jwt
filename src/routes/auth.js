const express = require('express')
const authController = require('../controller/auth-controller')

const authRouter = express.Router()

// POST / register
authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)

module.exports = authRouter