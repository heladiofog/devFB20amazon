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

// Este método es un login, regresa el token y true o el error o datos incorrectos
var authlogin = function authlogin(req, res) {
    (0, _auth.login)(req).then(function (token) {
        // Si el resultado es un token (!== false)
        if (token) {
            // todo Ok, devuelve un token y auth true
            res.status(200).send({
                auth: true,
                token: token
            });
        } else {
            // Error en la validación => unauthorized
            // Correo y/o contraseña inválidos
            res.status(401).send({
                auth: false,
                token: null,
                message: "Correo y/o contraseña inválidos"
            });
        }
    }).catch(function (err) {
        res.status(500).send({
            auth: false,
            error: err,
            message: "Por el momento no es posible atender tu petición."
        });
    });
}; //importar verificar y generartoken
exports.authlogin = authlogin;