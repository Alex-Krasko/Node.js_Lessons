const express = require('express')
const app = express()
let uniId = 0;
const users = [];
const joi = require("joi")

app.use(express.json())

const userScheme = joi.object({
    name: joi.string().min(3).required(),
    surname: joi.string().min(3).required(),
    city: joi.string().min(3).required(),
    age: joi.number().min(1).max(99).required()
})

app.get('/users', (req, res) => {
    res.send({ users })
})

app.post('/users', (req, res) => {
    ++uniId
    users.push({
        id: uniId,
        ...req.body
    })
    res.send({ id: uniId })
})

app.put('/users/:id', (req, res) => {
    const result = userScheme.validate(req.body)
    if (result.error) {
        return res.status(404).send({ error: result.error.details })
    }
    const userId = +req.params.id
    const user = users.find((user) => user.id === userId)
    if (user) {
        const { name, surname, city, age } = req.body
        user.name = name
        user.surname = surname
        user.city = city
        user.age = age
        res.send({ user })
    }
    else {
        res.status(404)
        res.send({ user: null })
    }

})

app.delete('/users/:id', (req, res) => {
    const userId = +req.params.id
    const user = users.find((user) => user.id === userId)
    if (user) {
        const userId = users.indexOf(user)
        users.splice(userId, 1)
        res.send({ user })
    }
    else {
        res.status(404)
        res.send({ user: null })
    }
})

app.listen(80)