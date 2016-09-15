# Quero Uma Loja - API

[![Build Status for Master](https://travis-ci.org/QueroUmaLoja/api-server.svg)](https://travis-ci.org/QueroUmaLoja/api-server)
[![Code Climate](https://codeclimate.com/github/QueroUmaLoja/api-server/badges/gpa.svg)](https://codeclimate.com/github/QueroUmaLoja/api-server)
[![Test Coverage](https://codeclimate.com/github/QueroUmaLoja/api-server/badges/coverage.svg)](https://codeclimate.com/github/QueroUmaLoja/api-server/coverage)
[![Issue Count](https://codeclimate.com/github/QueroUmaLoja/api-server/badges/issue_count.svg)](https://codeclimate.com/github/QueroUmaLoja/api-server)
[![GitHub issues](https://img.shields.io/github/issues/QueroUmaLoja/api-server.svg)](https://github.com/QueroUmaLoja/api-server/issues)
[![GitHub stars](https://img.shields.io/github/stars/QueroUmaLoja/api-server.svg)](https://github.com/QueroUmaLoja/api-server/stargazers)
[![GitHub license](https://img.shields.io/badge/license-AGPL-blue.svg)](https://raw.githubusercontent.com/QueroUmaLoja/api-server/master/LICENSE)

API de Produtos.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Pré Requisitos

- [Nodejs 6](https://nodejs.org)
- [MongoDB](https://www.mongodb.com)
- [Cloudinary](https://cloudinary.com)

### Instalação

Antes de rodar aplicação, são necessárias configurações das variáveis de ambiente - valores entre parênteses é o padrão:

```
NODE_IP (127.0.0.1)
NODE_PORT (8080)
MONGODB_URI
CLOUDINARY_URL
PASSWORD_SALT ($2a$10$MeVpoT66x6r2eNFZ8diZDe)
```

Você pode criar um arquivo ".env" no diretório raiz do projeto com as variáveis de ambiente. O arquivo é ignorado pelo git.

Logo após tudo configurado, basta instalar as dependências

```
npm install
```

Após a instalação, é necessário criar a estrutura básica do banco, então, rode o comando de instalação:

```
node ./bin/install
```

Feito isso, você pode rodar a API e acessar o endereço com o mesmo nome do seu host - talvez seja necessário editar o registro no banco para 
atualizar com o endereço correto. Bastando editar a coleção **sites**.


### Rodando

```
npm start
```

### Testes

Para os testes unitários, é utilizado o Mocha.

```
npm test
```

### New Relic

A api é possui integração com o [New Relic](https://www.newrelic.com), bastando você setar as variáveis de ambiente:

```
APPLICATION_NAME
NEW_RELIC_LICENSE_KEY
NEW_RELIC_LOG
```

### Garantia

Esta API é disponibilizada *como está*, o autor não é responsável por qualquer perda ou dano consequente da utilização
desta. Você tem total liberdade de instalá-la em seu próprio servidor e utilizar para quaisquer fins, com ou sem
modificações na mesma.

### Contribuindo

Esta é uma API de código aberto e livre, fique a vontade para fazer um fork e contribuir com qualquer melhoria ou solução
de bugs que a mesma possua ou precise.

### Gerando um password salt

Para gerar um salt para o password, você pode executar o arquivo de exemplo da própria biblioteca [bcrypt](https://github.com/ncb000gt/node.bcrypt.js) e 
utilizar alguma das várias saídas geradas (você precisará dar um Ctrl+C para finalizar o script). 

```
node node_modules/bcrypt/examples/forever_gen_salt.js
```

### Documentação

A [documentação](http://queroumaloja.github.io/api-server/) é gerada utilizando o utilitário apidoc e você pode conferir [aqui](http://queroumaloja.github.io/api-server/):

```
./node_modules/.bin/apidoc -o apidoc -i routers/
```

