'use strict';

var mockery = require('mockery');

describe('Imagem DAO', function () {
    before(function() {
        mockery.enable({
            warnOnUnregistered: false,
            warnOnReplace: false
        });

        mockery.registerMock('../models/produto', {
            findOneAndUpdate: function(filter, params, options, end) {
                end(null, {});
            }
        });

        this.dao = require('../../dao/imagem');
    });

    after(function() {
        mockery.disable()
    });

    it('#adicionaImagem', function (done) {
        this.dao.adicionaImagem(1, 1, {}, function() {
            done();
        });
    });

    it('#apagaImagem', function (done) {
        this.dao.adicionaImagem(1, 2, 3, function() {
            done();
        });
    });
});
