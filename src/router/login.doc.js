const getToken = {
  tags: [ 'Login' ],
  summary: 'Login para gerar o token de acesso à  carteira e conta do usuário',
  description: 'Login para gerar o token de acesso à  carteira e conta do usuário',
};

const loginRouteDoc = {
  '/login': {
    post: getToken,
  }
};

module.exports = loginRouteDoc;