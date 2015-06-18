'use strict';

var pagination  = require('mongoose-paginate');
var mongoose = require(__dirname + '/index').mongoose;
var Schema = mongoose.Schema;
var AvisoSchema = new Schema({
    titulo: {
        type: String,
        default: ''
    },
    conteudo: {
        type: String,
        default: ''
    },
    tipo: {
        type: String,
        default: 'info'
    },
    cadastro: {
        type: Date,
        default: Date.now
    },
    inicio: {
        type: Date,
        default: Date.now
    },
    fim: {
        type: Date,
        default: Date.now
    },
    site: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    }
});

AvisoSchema.plugin(pagination);

var Aviso = mongoose.model('Aviso', AvisoSchema);

exports.list = function(req, res, callback) {
    var filtro = {
        site: req.headers.authentication
    };

    if (req.query.inicio) {
        var dataInicio = req.query.inicio.split('-');
        var inicio = new Date(dataInicio[0], (dataInicio[1] - 1), dataInicio[2]);

        filtro.inicio = {
            $gte: inicio
        };
    }

    if (req.query.fim) {
        var dataFim = req.query.fim.split('-');
        var fim = new Date(dataFim[0], (dataFim[1] - 1), dataFim[2]);

        filtro.fim = {
            $gte: fim
        };
    }

    Aviso
        .find(filtro)
        .sort({
            cadastro: -1
        })
        .exec(function(err, data) {
            callback(err, data);
        });
};

exports.get = function(req, res, callback) {
    var id = req.params.id;

    Aviso
        .findOne({
            _id: id,
            site: req.headers.authentication
        })
        .exec(function(err, data) {
            callback(err, data);
        });
};

exports.create = function(req, res, callback) {
    var data = req.body;

    var dataInicio = data.inicio.split('-');
    var inicio = new Date(dataInicio[2], (dataInicio[1] - 1), dataInicio[0]);

    var dataFim = data.fim.split('-');
    var fim = new Date(dataFim[2], (dataFim[1] - 1), dataFim[0]);

    var dados = {
        titulo: data.titulo,
        conteudo: data.conteudo,
        cadastro: (new Date),
        tipo: data.tipo,
        inicio: inicio,
        fim: fim,
        site: req.headers.authentication
    };

    var aviso = new Aviso(dados);
        aviso.save(function(err, data) {
            callback(err, data);
        });
};

exports.update = function(req, res, callback) {
    var id = req.params.id;
    var data = req.body;
    var dados = {
        titulo: data.titulo,
        conteudo: data.conteudo,
        tipo: data.tipo,
    };

    if (data.inicio.match(/^\d{2}\-\d{2}\-\d{4}$/)) {
        var dataInicio = data.inicio.split('-');
        var inicio = new Date(dataInicio[2], (dataInicio[1] - 1), dataInicio[0]);

        dados.inicio = inicio;
    }

    if (data.fim.match(/^\d{2}\-\d{2}\-\d{4}$/)) {
        var dataFim = data.fim.split('-');
        var fim = new Date(dataFim[2], (dataFim[1] - 1), dataFim[0]);

        dados.fim = fim;
    }

    Aviso.update({
        _id: id,
        site: req.headers.authentication
    }, dados, function(err, data) {
        callback(err, data);
    });
};

exports.delete = function(req, res, callback) {
    var id = req.params.id;

    Aviso.remove({
        _id: id,
        site: req.headers.authentication
    }, function(err, data) {
        callback(err, data);
    });
};