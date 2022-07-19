const express = require('express');
const httpError = require('./middlewares/httpError');
const { account } = require('./router/index');

const app = express();
app.use(express.json());

app.use(account);
app.use(httpError);
module.exports = app;
