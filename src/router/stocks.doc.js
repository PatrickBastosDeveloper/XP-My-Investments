const stocks = [
  {
    'stockId': 1,
    'companyName': 'AMBEV',
    'ticker': 'ABEV3',
    'qttStocksCompany': 45710,
    'currentValue': 14.51,
  },
];

const listDataCompanys = {
  tags: [ 'Stocks' ],
  summary: 'Lista com todas as empresas cadastradas e seus ativos',
  description: 'Lista com todas as empresas cadastradas e seus ativos',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            example: [
              {
                'stockId': stocks[0],
                'companyName': stocks[1],
                'ticker': stocks[2],
                'qttStocksCompany': stocks[3],
                'currentValue': stocks[4],
              },
            ],
          },
        },
      },
    },
  },
};

const dataCompanys = {
  tags: ['Stocks'],
  summary: 'Busca as informações dos ativos de uma empresa em específico',
  description: 'Busca as informações dos ativos de uma empresa em específico',
  parameters: [
    {
      name: 'ticker',
      in: 'query',
      description: 'ticker da empresa',
      type: 'string',
      example: 'BBAS3',
    },
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
                'companyName': stocks[1],
                'ticker': stocks[2],
                'qttStocksCompany': stocks[3],
                'value': stocks[4],
              },
          },
        },
      },
    },
  },
};

const stocksRouteDoc = {
  '/stocks': {
    get: listDataCompanys,
  },
  '/stock?ticker={}': {
    get: dataCompanys,
  },
};

module.exports = stocksRouteDoc;
