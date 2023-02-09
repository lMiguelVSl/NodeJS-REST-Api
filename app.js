const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use('/feed', feedRoutes.router);

app.use('/', (req, res) => res.send('Welcome Page'));
app.listen(8000);