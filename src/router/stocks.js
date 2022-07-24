const express = require( 'express' );
const { getAllStocksController, getByStockController } = require( '../controllers/stocksController' );

const route = express.Router();

route.get( '/stocks', getAllStocksController );
route.get( '/stock', getByStockController);

module.exports = route;