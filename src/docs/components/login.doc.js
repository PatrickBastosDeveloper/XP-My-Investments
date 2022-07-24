const getToken = {
  tags: ['Login'],
  summary: 'Login para gerar o token de acesso à  carteira e conta do usuário',
  description:
    'Login para gerar o token de acesso à  carteira e conta do usuário',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              description: 'Email do usuário',
              example: 'oliver@email.com',
            },
            password: {
              type: 'string',
              description: 'senha do usuário',
              example: 'Oliver1@',
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
                'token':
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJpbnZlc3RvcklkIjoxLCJpbnZlc3Rvck5hbWUiOiJPbGl2ZXIgQmFzdG9zIiwiYWNjb3VudEJhbGFuY2UiOiIxMDUzMy4wMCIsImVtYWlsIjoib2xpdmVyQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiT2xpdmVyMUAifSwiaWF0IjoxNjU4Njg2MTc3fQ.jKdJ_fO6xb4w1_qp39SwOBvUrr8WOlVO-dnCf0s8Oxc',
              },
          },
        },
      },
    },
  },
};

const loginRouteDoc = {
  '/login': {
    post: getToken,
  },
};

module.exports = loginRouteDoc;
