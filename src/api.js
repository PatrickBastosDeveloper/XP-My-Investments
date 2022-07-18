const express = require('express');
const { conta } = require('./router/index');

const app = express();
app.use(express.json());

app.use(conta);
module.exports = app;
