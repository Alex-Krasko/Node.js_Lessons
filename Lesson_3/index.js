// const fs = require('fs');
// const path = require('path');
// const file = path.join(__dirname, 'person.json')
// const person = {
//     "name": "Ivan",
//     "surname": "Ivanov",
//     "age": 55,
//     "city": "Ekatherinburg"
// }

// fs.writeFileSync(file, JSON.stringify(person, null, 2))


// const fs = require('fs');
// const path = require('path');
// const file = path.join(__dirname, 'person.json')
// const data = JSON.parse(fs.readFileSync(file, 'utf-8'))

// data.age = data.age - 10
// data.city = 'Ekatherinburg'

// fs.writeFileSync(file, JSON.stringify(data, null, 2))

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('<h1>Добро пожаловать</h1><a href="/about">На страницу about</a>')
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Добро пожаловать на страницу About</h1><a href="/">На главную страницу</a>')
// })

// app.listen(80)

