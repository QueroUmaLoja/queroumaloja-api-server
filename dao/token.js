'use strict';

var TokenModel = require('../models/token'),
    TokenAdapter = require('token'),
    TokenDAO  = function() {};

/**
 * Adiciona um token para o usuário
 */
TokenDAO.prototype.adiciona = function (user, done) {
    TokenAdapter.defaults.secret   = 'AAB';
    TokenAdapter.defaults.timeStep = (24 * 60 * 60);

    // validade do token é de uma semana
    var validade = new Date();
        validade.setDate(validade.getDate() + 7);

    // Gerando conteúdo do token
    var content = TokenAdapter.generate(user._id + '|' + user.email);

    TokenModel.create({
        usuario : user,
        cadastro: (new Date()),
        validade: validade,
        conteudo: content
    }, function (errCreate, resultCreate) {
        done(errCreate, resultCreate);
    });
};

TokenDAO.prototype.buscaPorConteudo = function (conteudo, site, done) {
    TokenModel.findOne(
            {
                conteudo: conteudo,
                validade: {
                    $lt: new Date()
                },
                site: site
            }
        )
        .populate(['usuario'])
        .exec(done);
};

module.exports = new TokenDAO;