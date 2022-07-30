![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)



# XP-My-Investments

> API REST desenvolvida para retornar no formato JSON dados de transações de compra e venda de ações, e algumas funcionalidades de conta digital. 

A arquitetura utlizada para o desenvovimento foi a `MSC`, dessa forma trazendo maior escalabilidade e facilidade de manutenção a aplicação.

Para acesso a conta e realização das trasações, o cliente efetua login com e-mail e senha para que o sistema `JWT` possa autenticar sua credencial na aplicação.

Foram utilizados o `Node.js`, `Express` e `JavaScript`, além do `ORM Sequelize` para realizar as transações com os bancos de dados `MySQL` no ambiente de desenvolvimento, e `PostgresSQL` no de produção.

Outras ferramentas utilizadas foram o `Docker`, para garantir a distribuição, o `Heroku` para deploy e, para documentar, o `Swagger`.

[Clique aqui](https://xp-my-investments.herokuapp.com/swagger/) e confira a documentação no `Swagger`.



### Ajustes e melhorias

Existem alguns alterações e adições que eu gostaria de criar para prática após a entrevista técnica que são:

- [ ] Teste unitários automatizados.
- [ ] Segregar e criar algumas entidades para melhorar a normalização. 
- [ ] Criar uma entidade para registro do histórico das transações de compra e venda de ações.
- [ ] Criar uma entidade conta para registro do saldo, e histórico de transações bancárias.
- [ ] Criar uma rota para cadastro de novos investidores.
- [ ] Enviar um e-mail de confirmação de transação.
- [ ] Utilizar para criptografar a senha no banco de dados a lib bcryptjs.
- [ ] Utilizar a lib http-status-codes.


## 🚀 Desenvolvimento

📋 Alguns pontos a ressaltar sobre o projeto:

* O uso de `API` para trazer o valor da ação do fechamento do pregão do dia anterior. Queria trazer na minha aplicação a experiência dessa informação o mais próximo da realidade, porém as API's que trazem os valores das ações em tempo real são pagas. Esse é o [Link da API](https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/B3SA3/10) utilizada e sua [Documentação](https://api-cotacao-b3.labdo.it/)

Obs: Por ser uma API financeira amadora pode ocorrer excesso no tráfego, ocorrendo falha 429 na requisição. Contudo a falha é breve, retornando em poucos segundos.

* Separei, na pasta utils, algumas funções que acreditei que desacopladas trariam maior flexibilidade ao código, além de respeitar o DRY. 

Essas são: 
- Função para consumir a API que traz o valor da ação. Optei pelo `Axios` para consumi-la.
- Função para tratar os erros de forma personalizada. 
- Funções para criação e validação do `JWT`.

Os arquivos de rotas, utils e middlewares foram centralizados em index para melhor distribuição da informações.


### 🔧 Instalação

Para utilizar o container basta rodar o comando: 

`docker-compose up -d`

Para criação do DB de desenvolvimento:

`npm db:migrate`

Para rodar a aplicação:

`npm run dev`

Caso necessário, as `variáveis de ambiente` foram informadas no `.env.example`.
## ⚙️ Executando os testes

Infelizmente, não foi possível a devida realizaçãos dos testes além da model.

Os testes realizados podem ser rodados com o comando:

`npm test`.

### ⌨️ Testes de estilo de codificação

Foi utilizada a lib eslint para seguir o padrão de regras e indentação.
É possível verificar rodando o comando:


`npm run lint`

## 🛠️ Construído com

* [JavaScript](https://devdocs.io/javascript/)
* [Node](https://nodejs.org/en/docs/)
* [Sequelize](https://sequelize.org/)
* [MySQL](https://dev.mysql.com/doc/)
* [Postegres](https://www.postgresql.org/docs/)
* [Docker](https://docs.docker.com/)
* [Nodemon](https://nodemon.io/)
* [jsonwebtoken](https://jwt.io/)
* [Axios](https://axios-http.com/ptbr/docs/intro)
* [cors](https://www.npmjs.com/package/cors)
* [sequelize-test-helpers](https://www.npmjs.com/package/sequelize-test-helpers)
* [chai](https://devdocs.io/chai/)
* [mocha](https://mochajs.org/api/mocha.js.html)
* [jest](https://jestjs.io/pt-BR/docs/getting-started)
* [eslint](https://eslint.org/docs/latest/user-guide/configuring/)

## 🖇️ Contribuindo para <XP-My-Investments>

Para contribuir com XP-My-Investments, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


## 📌 Versão

1.0


## ✒️ Autor

* [Patrick Bastos](https://github.com/PatrickBastosDeveloper)


## 📄 Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
⌨️ com ❤️ por [Patrick Bastos](https://github.com/PatrickBastosDeveloper) 😊

👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@PatrickBastosC-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/patrickbastosc)]() 
[![Linkedin Badge](https://img.shields.io/badge/-PatrickBastosDeveloper-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/patrickbastosdeveloper/)](https://www.linkedin.com/in/patrickbastosdeveloper/)
[![Gmail Badge](https://img.shields.io/badge/-patrickbastosc@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:patrickbastosc@gmail.com)](https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox)
