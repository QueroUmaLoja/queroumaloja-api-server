'use strict';

var Emprego = require('../../src/controllers/emprego');
var Site = require('mongoose').Types.ObjectId;
var sinon = require('sinon');
var assert = require('assert');
var request = require('request');
var response = {
    content: null,
    statusCode: 0,

    json: function(content){
        this.content = content;

        return this;
    },
    status: function(status) {
        this.statusCode = status;

        return this;
    }
};

describe('Emprego Controller', function () {
    it('#lista() deve retornar um array', function () {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site()
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Emprego.lista(request, response, function() {
            assert.equal(response.content.object, 'list');
        });
    });

    it('#abre() deve retornar um objeto', function () {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site()
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Emprego.abre(request, response, function() {
            assert.equal(response.content.object, 'object');
            assert.equal(response.statusCode, 200);
        });
    });

    it('#adiciona() deve retornar um array', function () {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site()
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Emprego.adiciona(request, response, function() {
            assert.equal(response.content.object, 'object');
        });
    });

    it('#atualiza() deve retornar um objeto', function () {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site(),
            id: 1
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Emprego.atualiza(request, response, function() {
            assert.equal(response.content.object, 'error');
        });
    });

    it('#apaga() deve retornar um objeto', function () {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site(),
            id: 1
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Emprego.apaga(request, response, function() {
            assert.equal(response.content.object, 'error');
        });
    });
});