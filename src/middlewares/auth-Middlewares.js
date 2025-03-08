const jwt = require('jsonwebtoken')
const users = require('../model/users')

// chave secreta
const secretKey = 'E$19248@7+.'

//autenticação
const authMiddleware = (req, res, next) => {
    // pegando o token do headers
    const tokenHeader = req.headers.authorization

    // verificando se o token está certo
    if(!tokenHeader){
        return res.status(401).json({ message: 'Authorization header is required'})
    }

    const token = tokenHeader.split(' ')[1]

    // verificando o token se é válido
    try{
        const  decodedToken = jwt.verify(token, secretKey)

        const user = users.find(user => user.email === decodedToken.email)

        if(!user){
            return res.status(401).json({ message: 'Invalid user' })
        }

        req.user = user

        next()
    }catch(error){
        res.status(401).json({ message: 'Invalid token'})
    }
    console.log(token)
    next()
}

module.exports = authMiddleware