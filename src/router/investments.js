const express = require( 'express' );
const {buyStocksController, sellStocksController, getInvestmentsController} = require( '../controllers/investmentsController' );
const { validateToken } = require( '../middlewares' );

const route = express.Router();

route.post('/investments/buy', validateToken, buyStocksController);
route.post('/investments/sell',  validateToken, sellStocksController);
route.get('/investments/:id', getInvestmentsController)

module.exports = route;