const { default: axios } = require('axios');
const rescue = require('express-rescue');
const {buyStocksService, sellStocksService} = require('../services/investmentsService');

const buyStocksController = rescue(async (req, res) => {
  const { investorId, ticker, qttStocksBuy } = req.body;
  const value = await getValueStock(ticker);

  const buy = await buyStocksService({ investorId, ticker, qttStocksBuy, value});
  res.status(200).json(buy);
});

const sellStocksController = rescue(async (req, res) => {
  const { investorId, ticker, qttStocksSell } = req.body;
  // const value = await getValueStock( ticker );
  const value = 10.0;
  
  const sell = await sellStocksService({ investorId, ticker, qttStocksSell, value});
  res.status(200).json(sell);
});

const getValueStock = async (ticker) => {
  const { data } = await axios(
    `https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${ticker}/1`
  );
  const [ item ] = data;
  
  return item.vl_fechamento
}

module.exports = { buyStocksController, sellStocksController };
