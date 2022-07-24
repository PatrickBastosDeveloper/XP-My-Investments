const express = require('express');
const { httpError } = require('./middlewares');
const { account, login, investments, stocks } = require( './router/index' );
var cors = require('cors')
// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require( 'swagger-ui-express' )
const swaggerConfig = require('./docs/swagger')

app.use(cors())
const app = express();

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

app.use(stocks);
app.use(account);
app.use(investments);
app.use(login);
app.use(httpError);

module.exports = app;
