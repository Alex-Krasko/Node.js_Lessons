const express = require('express')
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data.json')
const readData = JSON.parse(fs.readFileSync(file, 'utf-8'))
const app = express()
const port = 80;
let data = {}


app.get('/', (req, res) => {
    data = readData
    res.send(`<a href="/about">Перейти на страницу about.<a/><p>counter = ${data.root++}</p>`)
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
})

app.get('/about', (req, res) => {
    data = readData
    res.send(`<a href="/">Перейти на главную страницу.<a/><p>counterAbout = ${data.about++}</p>`)
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
})

app.get('/*', (req, res) => {
    data = readData
    res.send(`<h1>Ошибка 404.<h1/><p>Такой страницы не существует</p><a href="/">На главную</a><p>counterErr = ${data.error++}</p>`)
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
})

app.listen(port)