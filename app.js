const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use('/feed', feedRoutes.router);

app.use('/', (req, res) => res.send('Welcome Page'));

app.listen(8000);