const buyStocks = {
  tags: ['Investments'],
  summary: 'Rota para compra de ações.',
  description: 'Nesta rota o cliente pode comprar ações',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            investorId: {
              type: 'number',
              description: 'Id do usuário',
              example: 3,
            },
            ticker: {
              type: 'string',
              description: 'código identificador da ação(ticker)',
              example: 'ABEV3',
            },
            qttStocksBuy: {
              type: 'number',
              description: 'Quantidade de ações a serem compradas',
              example: 4,
            },
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
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
              'investorId': 1,
              'ticker': 'ABEV3',
              'qttStocksBuy': 4,
            },
          },
        },
      },
    },
  },
};

const sellStocks = {
  tags: ['Investments'],
  summary: 'Rota para venda de ações.',
  description: 'Nesta rota o cliente pode vender suas ações.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            investorId: {
              type: 'number',
              description: 'Id do usuário',
              example: 2,
            },
            ticker: {
              type: 'string',
              description: 'código identificador da ação(ticker)',
              example: 'PETR4',
            },
            qttStocksSell: {
              type: 'number',
              description: 'Quantidade de ações a serem vendidas',
              example: 4,
            },
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
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
              "investorId": 2, 
              "ticker": "PETR4", 
              "qttStocksSell": 4
          },
          },
        },
      },
    },
  },
};

const investmentsRouteDoc = {
  '/investments/buy': {
    post: buyStocks,
  },
  '/investments/sell': {
    post: sellStocks,
  },
};

module.exports = investmentsRouteDoc;
