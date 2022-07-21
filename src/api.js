const express = require('express');
const httpError = require('./middlewares/httpError');
const { account, login, investments } = require('./router/index');

const app = express();
app.use(express.json());

app.use( account );
app.use(investments)
app.use(login);
app.use(httpError);
module.exports = app;