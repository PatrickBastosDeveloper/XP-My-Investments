const makingDeposit = {
  tags: ['Account'],
  summary: 'Rota para depósitos na conta corrente do usuário',
  description: 'Rota para depósitos na conta corrente do usuário',
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
              example: 100.00,
            },
          },
        },
      },
    },
  },
  // requestHeader: {
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'string',
  //         properties: {
  //           token: {
  //             type: 'string',
  //             description: 'Tocken de validação para acesso aos dados do endpoint.',
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
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
  summary: 'Rota para saque da conta corrente do usuário',
  description: 'Rota para saque da conta corrente do usuário',
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
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: 'You made a withdrawal of 100. Your balance now is R$ 12230 ',
          },
        },
      },
    },
  },
};

const getAccountBalance = {
  tags: ['Account'],
  summary: 'Rota para consulta de saldo do cliente.',
  description:
    'Rota para consulta de saldo do cliente',
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
            investorName: {
              type: 'string',
              description: 'Nome do usuário',
              example: 'Arthur Pires',
            },
            accountBalance: {
              type: 'number',
              description: 'Saldo em conta do usuário',
              example: '5540.00',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example:
            {
              "investorId": 3,
              "investorName": "Arthur Pires",
              "accountBalance": 5540.00
            },
          },
        },
      },
    },
  },
}

const accountRouteDoc = {
  '/account/deposit': {
    post: makingDeposit,
  },
  '/account/withdraw': {
    post: makingWithdraw,
  },
  '/account/:id': {
    post: getAccountBalance,
  },
};

module.exports = accountRouteDoc;
