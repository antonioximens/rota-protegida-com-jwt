const express = require('express')
const router = require('./routes/routes')


// configuração do servidor
const app = express()
app.use(express.json())

// Rotas
app.use(router)

// inicialização do servidor
const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\nhttp://localhost:${PORT}`))