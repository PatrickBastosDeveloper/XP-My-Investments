const express = require('express');
const { httpError } = require('./middlewares');
const { account, login, investments, stocks } = require( './router/index' );
var cors = require('cors')
// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require( 'swagger-ui-express' )
const swaggerConfig = require('./docs/swagger')

const app = express();

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

app.use( (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
} );

app.use(cors())
app.use(stocks);
app.use(account);
app.use(investments);
app.use(login);
app.use(httpError);

module.exports = app;
