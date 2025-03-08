const express = require('express')
const authMiddleware = require('../middlewares/auth-Middlewares')

const dashboardRouter = express.Router()

// GET /dashboard
dashboardRouter.get('/dashboard', authMiddleware, (req, res) => {

    const email = req.user.email

    res.json({ message: `Você está na área protegida, bem vindo ${email}`})
})

module.exports = dashboardRouter