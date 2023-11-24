const express = require('express')
const fs = require('fs');
const app = express()
const port = 80
let uniId = 0;
let users = [];
const path = require('path');
const file = path.join(__dirname, 'users.json')
const readData = JSON.parse(fs.readFileSync(file, 'utf-8'))
const joi = require("joi")

data = readData

app.use(express.json())

const userScheme = joi.object({
    firstName: joi.string().min(3).required(),
    lastName: joi.string().min(3).required(),
    city: joi.string().min(3).required(),
    age: joi.number().min(1).max(99).required()
})

app.get('/users', (req, res) => {
    users = readData
    res.send({ users })
})

app.post('/users', (req, res) => {
    users = readData
    ++uniId
    users.push({
        id: uniId,
        ...req.body
    })
    fs.writeFileSync(file, JSON.stringify(users, null, 2))
    res.send({ id: uniId })
})

app.put('/users/:id', (req, res) => {
    users = readData
    const result = userScheme.validate(req.body)
    if (result.error) {
        return res.status(404).send({ error: result.error.details })
    }
    const userId = +req.params.id
    const user = users.find((user) => user.id === userId)
    if (user) {
        const { firstName, lastName, city, age } = req.body
        user.firstName = firstName
        user.lastName = lastName
        user.city = city
        user.age = age
        fs.writeFileSync(file, JSON.stringify(users, null, 2))
        res.send({ user })
    }
    else {
        res.status(404)
        res.send({ user: null })
    }

})

app.delete('/users/:id', (req, res) => {
    users = readData
    const userId = +req.params.id
    const user = users.find((user) => user.id === userId)
    if (user) {
        const userId = users.indexOf(user)
        users.splice(userId, 1)
        fs.writeFileSync(file, JSON.stringify(users, null, 2))
        res.send({ user })
    }
    else {
        res.status(404)
        res.send({ user: null })
    }
})

app.listen(port)