'use strict';

var paginate            = require('express-paginate');
var UsuarioModel        = require('../models/usuario');
var UsuarioController   = function () {};

/**
 * Lista os usuários
 *
 * @param req
 * @param res
 * @param done
 */
UsuarioController.prototype.lista = function (req, res, done) {
    UsuarioModel.paginate(
        {
            site: req.app.site._id
        },
        {
            page: req.query.page,
            limit: req.query.limit,
            sort: {
                nome: 'asc',
                cadastro: 'desc'
            }
        },
        function (err, data) {
            if (err) {
                res.status(500).json({
                    object: 'error',
                    has_more: false,
                    data: err.message,
                    itemCount: 1,
                    pageCount: 1
                });
            } else {
                var pageCount = data.pages;
                var itemCount = data.total;

                res.status(200).json({
                    object: 'list',
                    has_more: paginate.hasNextPages(req)(pageCount),
                    data: data.docs,
                    itemCount: itemCount,
                    pageCount: pageCount
                });
            }

            done(err, data);
        }
    );
};

/**
 * Visualiza um usuário
 *
 * @param req
 * @param res
 * @param done
 */
UsuarioController.prototype.abre = function (req, res, done) {
    UsuarioModel
        .findOne(
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
                            message: 'Usuário não encontrado'
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
        );
};

/**
 * Adiciona um usuário
 *
 * @param req
 * @param res
 * @param done
 */
UsuarioController.prototype.adiciona = function (req, res, done) {
    UsuarioModel
        .create(
            {
                site: req.app.site._id,
                nome: req.body.nome,
                email: req.body.email,
                password: req.body.password,
                localidade: {
                    uf: req.body.uf,
                    estado: req.body.estado,
                    cidade: req.body.cidade
                }
            },
            function (err, user) {
                if (err) {
                    console.error(err);

                    res.status(500).json({
                        object: 'error',
                        has_more: false,
                        data: err.message,
                        itemCount: 1,
                        pageCount: 1
                    });
                } else {
                    delete user.site;
                    delete user.__v;
                    delete user.cadastro;

                    res.status(201).json({
                        object: 'object',
                        has_more: false,
                        data: user,
                        itemCount: 1,
                        pageCount: 1
                    });
                }

                done(err, user);
            }
        );
};

/**
 * Atualiza um usuário
 *
 * @param req
 * @param res
 * @param done
 */
UsuarioController.prototype.atualiza = function (req, res, done) {
    UsuarioModel
        .update(
            {
                _id: req.params.id,
                site: req.app.site._id
            },
            {
                nome: req.body.nome,
                email: req.body.email,
                nivel: req.body.nivel
            },
            function (err, usuario) {
                if (err) {
                    res.status(500).json({
                        object: 'error',
                        has_more: false,
                        data: err.message,
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
};

/**
 * Remove um usuário
 *
 * @param req
 * @param res
 * @param done
 */
UsuarioController.prototype.apaga = function (req, res, done) {
    UsuarioModel
        .remove(
            {
                _id: req.params.id,
                site: req.app.site._id
            },
            function (err, usuario) {
                if (err) {
                    res.status(500).json({
                        object: 'error',
                        has_more: false,
                        data: err.message,
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
};

module.exports = new UsuarioController;
