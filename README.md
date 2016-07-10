# Quero Uma Loja - API

[![Build Status for Master](https://travis-ci.org/QueroUmaLoja/queroumaloja-api-server.svg?branch=master)](https://travis-ci.org/QueroUmaLoja/queroumaloja-api-server)
[![Build Status for Develop](https://travis-ci.org/QueroUmaLoja/queroumaloja-api-server.svg?branch=develop)](https://travis-ci.org/QueroUmaLoja/queroumaloja-api-server)
[![Code Climate](https://codeclimate.com/github/mrprompt/queroumaloja-api-server/badges/gpa.svg)](https://codeclimate.com/github/mrprompt/queroumaloja-api-server)
[![Test Coverage](https://codeclimate.com/github/mrprompt/queroumaloja-api-server/badges/coverage.svg)](https://codeclimate.com/github/mrprompt/queroumaloja-api-server/coverage)
[![Issue Count](https://codeclimate.com/github/mrprompt/queroumaloja-api-server/badges/issue_count.svg)](https://codeclimate.com/github/mrprompt/queroumaloja-api-server)

API de Produtos para empresas de pequeno e médio porte, que queiram uma forma simples de ter um site com vendas on-line.

### Pré Requisitos

- Sendgrid (Envio de e-mails de aviso)
- Cloudinary (Armazenamento)
- Pagar-me (Pagamentos) - opcional
- PagSeguro (Pagamentos) - opcional

### Instalação

Antes de rodar aplicação, são necessárias configurações das variáveis de ambiente - valores entre parênteses é o padrão:

```
NODE_IP (127.0.0.1)
NODE_PORT (8080)
DB_USERNAME (admin)
DB_PASSWORD (admin)
DB_HOST (127.0.0.1)
DB_PORT (27017)
DB_NAME (test)
PASSWORD_SALT
``` 

Logo após tudo configurado, basta instalar as dependências

```
npm install
```


### Rodando

```
npm start
```


### Testes

Para os testes unitários, é utilizado o Mocha.

**ATENÇÃO**
Os testes utilizam as mesmas variáveis de ambiente da aplicação, então, para que não ocorra perda de dados, sempre
sobrescreva as variáveis para configurar o ambiente o banco de dados correto ANTES de executar os testes.

```
npm test
```


### Garantia
Esta API é disponibilizada *como está*, o autor não é responsável por qualquer perda ou dano consequente da utilização 
desta. Você tem total liberdade de instalá-la em seu próprio servidor e utilizar para quaisquer fins, com ou sem 
modificações na mesma.

### Contribuindo
Esta é uma API de código aberto e livre, fique a vontade para fazer um fork e contribuir com qualquer melhoria ou solução
de bugs que a mesma possua ou precise.
