const makingDeposit = {
  tags: ['Account'],
  summary: 'Rota para depósitos na conta corrente do cliente',
  description: 'Nesta rota, é possível que o cliente realize depósitos em sua conta corrente.',
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
            value: {
              type: 'number',
              description: 'Valor a ser depositado',
              example: 100.0,
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
            example:
              'You have made a deposit in the amount of R$ 100. Your balance now is R$ 12330',
          },
        },
      },
    },
  },
};

const makingWithdraw = {
  tags: ['Account'],
  summary: 'Rota para saque da conta corrente do cliente',
  description: 'Nesta rota, é possível que o cliente realize saques de sua conta corrente.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            investorId: {
              type: 'number',
              description: 'Id do usuário',
              example: 1,
            },
            value: {
              type: 'number',
              description: 'Valor do saque',
              example: 100.0,
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
            example:
              'You made a withdrawal of 100. Your balance now is R$ 12230 ',
          },
        },
      },
    },
  },
};

const getAccountBalance = {
  tags: ['Account'],
  summary: 'Rota para consulta de saldo do cliente.',
  description: 'Nesta rota o cliente pode acompanhar o saldo de sua conta corrente.',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id do usuário',
      type: 'string',
      example: 3,
    },
  ],
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
              'investorId': 3,
              'investorName': 'Arthur Pires',
              'accountBalance': 5540.0,
            },
          },
        },
      },
    },
  },
};

const accountRouteDoc = {
  '/account/deposit': {
    post: makingDeposit,
  },
  '/account/withdraw': {
    post: makingWithdraw,
  },
  '/account/{id}': {
    get: getAccountBalance,
  },
};

module.exports = accountRouteDoc;
