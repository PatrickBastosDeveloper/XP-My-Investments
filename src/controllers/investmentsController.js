const rescue = require('express-rescue');
const { buyStocksService, sellStocksService, getInvestmentsServie } = require( '../services/investmentsService' );
const getValueStock = require( '../utils/axiosStocks' );

const buyStocksController = rescue(async (req, res) => {
  const { investorId, ticker, qttStocksBuy } = req.body;
  const value = await getValueStock(ticker);

  const buy = await buyStocksService({ investorId, ticker, qttStocksBuy, value});
  res.status(200).json(buy);
});

const sellStocksController = rescue(async (req, res) => {
  const { investorId, ticker, qttStocksSell } = req.body;
  const value = await getValueStock( ticker );
  
  const sell = await sellStocksService({ investorId, ticker, qttStocksSell, value});
  res.status(200).json(sell);
});

const getInvestmentsController = rescue( async ( req, res ) => {
  const { id } = req.params;
  
  const investments = await getInvestmentsServie( id );
  res.status( 200 ).json( investments );
} );
  
module.exports = { buyStocksController, sellStocksController, getInvestmentsController };
