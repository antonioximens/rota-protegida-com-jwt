const express = require('express')
const users = require('../model/users')
const jwt = require('jsonwebtoken')

const secretKey = 'E$19248@7+.'

module.exports = {
    // POST /register
    register: (req, res) =>  {
        // pegando os dados do body
        const { name, password, email } = req.body
        // verificando se está preenchido os dados
        if(!name || !password || !email){
            return res.status(400).json( { message: `Invalid credentials` })
        }

        // verificando se há email existente
        const user = users.find(user => user.email === email)
        if(user){
            return res.status(400).json({ message: `Email already exists`})
        }

        const newUser = {
            name,
            password,
            email,
            role: 'standard'
        }
        
        users.push(newUser)
        res.status(201).json({ newUser })
        
    },

    // POST /login
    login: (req, res) => {
        // pegando os dados do body
        const { email,password } = req.body
        // verificando se está preenchido os dados
        if( !email || !password ){
            return res.status(400).json( { message: `Invalid credentials` })
        }
        // verificando se existe o user
        const userExists = users.find(user => user.email === email && user.password === password)

        if(!userExists){
            return res.status(401).json({ message: `Nonexistent user`})
        }

        // utilizando o JWT para gerar um token
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h'})
        res.status(200).json({ token})
    }
} 