const account = require('./account');
const login = require('./login');
const investments = require('./investments')
const stocks = require('./stocks')


module.exports = {
  account,
  login,
  investments,
  stocks
};

// /**
//  @swagger
//  *  tags:
//  *      name: Login
//  *      description: Endpoint para login dos usuários.
//  */

// /**
//  @swagger
//  *  components:
//  *      schemas:
//  *        Login: 
//  *            type: object
//  *            required:
//  *              - email
//  *              - password
//  *            properties:
//  *              email:
//  *                    type: string
//  *                    description: E-mail do usuário cadastrado
//  *              password:
//  *                    type: string
//  *                    description: Senha de acesso do usuário cadastrado
//  *            example:
//  *                email: oliver@email.com
//  *                password: Oliver1@
//  */

// /**
//  * @swagger
//  *  /Login:
//  *    post:
//  *       tags: [Login]
//  *       description: Endpoint retorna um token
//  *       parameters:
//  *         - in: body
//  *           name: email
//  *           type: string
//  *           required: true
//  *       responses:
//  *         200:
//  *           content:
//  *             application/json:
//  *               schema:
//  *                 type: object
//  *                 items:
//  *                   $ref: '#/components/schemas/Login'
//  */

// /**
//  @swagger
//  *  tags:
//  *      name: Account
//  *      description: Endpoint para acesso as informações da conta.
//  */

// /**
//  @swagger
//  *  components:
//  *      schemas:
//  *        Account: 
//  *            type: object
//  *            required:
//  *              - id
//  *            properties:
//  *              investorId:
//  *                    type: string
//  *                    description: É preciso informar o id do usuário no final do link
//  *            example:
//  *                localhost:3000/account/3
//  */

// /**
//  * @swagger
//  *  /account/{id}:
//  *    get:
//  *       tags: [Account]
//  *       description: Este endpoint apresenta o saldo da conta do usuário.
//  *       security:
//  *         - bearerAuth: []
//  *       parameters:
//  *         - in: path
//  *           name: id
//  *           type: string
//  *           required: true
//  *       responses:
//  *         200:
//  *           content:
//  *             application/json:
//  *               schema:
//  *                 type: object
//  *                 items:
//  *                   $ref: '#/components/schemas/Account'
//  */
