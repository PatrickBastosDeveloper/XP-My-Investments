const express = require( 'express' );
const buyStocksController = require( '../controllers/investmentsController' );

const route = express.Router();

route.post('/investments/buy', buyStocksController);

module.exports = route;