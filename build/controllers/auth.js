'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authlogin = undefined;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../managers/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Este método es un login, regresa el token y true o el error
var authlogin = function authlogin(req, res) {
    (0, _auth.login)(req).then(function (token) {
        res.status(200).send({
            auth: true,
            token: token
        });
    }).catch(function (err) {
        res.status(400).send({
            auth: false,
            error: err
        });
    });
}; //importar verificar y generartoken
exports.authlogin = authlogin;