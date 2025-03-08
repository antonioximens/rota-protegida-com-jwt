const express = require('express')
const authRouter = require('./auth')
const dashboardRouter = require('./dashboard')

const router = express.Router()
// rotas
router.use('/auth', authRouter)
router.use('/protected', dashboardRouter)


module.exports = router