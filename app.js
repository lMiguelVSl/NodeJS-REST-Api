const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const port = 8000;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feed', feedRoutes.router);

app.use('/', (req, res) => res.send('Welcome Page'));

app.listen(port);
console.log('Started in port:', port);