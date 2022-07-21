const { Investment, Stock, Investor } = require('../database/models');
const { HttpException } = require('../utils/index');

const buyStocksService = async ({investorId, ticker, qttStocksBuy,value}) => {
  const stocks = await Stock.findOne( { where: { ticker } } );
  if ( qttStocksBuy > stocks.qttStocksCompany ) {
    throw new HttpException(400, 'Amount of stocks greater than available.');
  }
  
  const investor = await Investor.findOne({
    where: { investorId: investorId },
  } );
  
  const totalStocksBroker = qttStocksBuy * value;
  
  if (totalStocksBroker > Number(investor.accountBalance)) {
    throw new HttpException(400, 'insufficient funds.');
  }
  const investment = await Investment.create({
    investorId: investorId,
    stockId: stocks.stockId,
    qttInvestorStock: qttStocksBuy,
  });
  
  await stocks.update({
    qttStocksCompany: stocks.qttStocksCompany - qttStocksBuy,
  });
  await investor.update({
    accountBalance: Number(investor.accountBalance) - totalStocksBroker,
  });
  
  return investment;
};


module.exports = buyStocksService;
