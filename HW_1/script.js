// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');
const port = 80;
let rootCounter = 0;
let aboutConter = 0;
let errorCounter = 0;

const server = http.createServer((req, res) => {


    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<a href="/about">Перейти на страницу about!<a/><p>counter = ${rootCounter++}</p>`);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<a href="/">Перейти на главную страницу!<a/><p>counterAbout = ${aboutConter++}</p>`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Ошибка 404.<h1/><p>Такой страницы не существует</p><a href="/">На главную</a><p>counterErr = ${errorCounter++}</p>`);
    }
});

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});