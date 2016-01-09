'use strict';

var paginate            = require('express-paginate');
var UsuarioModel        = require(__dirname + '/../models/usuario');
var UsuarioController   = {
    lista: function (req, res, done) {
        UsuarioModel.paginate(
            {
                site: req.headers.site
            },
            {
                page: req.query.page,
                limit: req.query.limit,
                populate: ['site'],
                sortBy: {cadastro: -1}
            },
            function (err, data) {
                if (err) {
                    res.status(500).json({
                        object: 'error',
                        has_more: false,
                        data: err,
                        itemCount: 1,
                        pageCount: 1
                    });
                } else {
                    var pageCount = data.pages;
                    var itemCount = data.total;

                    res.status(200).json({
                        object: 'list',
                        has_more: paginate.hasNextPages(req)(pageCount),
                        data: data,
                        itemCount: itemCount,
                        pageCount: pageCount
                    });
                }

                done(err, data);
            }
        );
    },

    abre: function (req, res, done) {
        UsuarioModel.findOne(
            {
                _id: req.params.id
            },
            function (err, user) {
                if (err || user === null) {
                    res.status(404).json({
                        object: 'error',
                        has_more: false,
                        data: {
                            status: 404,
                            message: 'Usuário não encontrado',
                        },
                        itemCount: 1,
                        pageCount: 1
                    });
                } else {
                    res.status(200).json({
                        object: 'object',
                        has_more: false,
                        data: user,
                        itemCount: 1,
                        pageCount: 1
                    });
                }

                done(err, user);
            }
        ).populate('site');
    },

    adiciona: function (req, res, done) {
        var usuario = new UsuarioModel({
            site: req.headers.site,
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
            localidade: {
                uf: req.body.uf,
                estado: req.body.estado,
                cidade: req.body.cidade
            }
        });

        usuario.save(function (err, user) {
            if (err) {
                res.status(500).json({
                    object: 'error',
                    has_more: false,
                    data: err,
                    itemCount: 1,
                    pageCount: 1
                });
            } else {
                res.status(201).json({
                    object: 'object',
                    has_more: false,
                    data: user,
                    itemCount: 1,
                    pageCount: 1
                });
            }

            done(err, user);
        });
    },

    atualiza: function (req, res, done) {
        UsuarioModel.update(
            {
                _id: req.params.id,
                site: req.headers.site,
            },
            {

                email: req.body.email,
                password: req.body.password,
                nome: req.body.nome,
                localidade: {
                    estado: req.body.estado,
                    cidade: req.body.cidade
                }
            },
            function (err, usuario) {
                if (err) {
                    res.status(500).json({
                        object: 'error',
                        has_more: false,
                        data: err,
                        itemCount: 1,
                        pageCount: 1
                    });
                } else {
                    res.status(204).json({
                        object: 'object',
                        has_more: false,
                        data: usuario,
                        itemCount: 1,
                        pageCount: 1
                    });
                }

                done(err, usuario);
            }
        );
    },

    apaga: function (req, res, done) {
        UsuarioModel.remove(
            {
                _id: req.params.id,
                site: req.headers.site
            },
            function (err, usuario) {
                if (err) {
                    res.status(500).json({
                        object: 'error',
                        has_more: false,
                        data: err,
                        itemCount: 1,
                        pageCount: 1
                    });
                } else {
                    res.status(204).json({
                        object: 'object',
                        has_more: false,
                        data: usuario,
                        itemCount: 1,
                        pageCount: 1
                    });
                }

                done(err, usuario);
            }
        );
    }
};

module.exports = UsuarioController;