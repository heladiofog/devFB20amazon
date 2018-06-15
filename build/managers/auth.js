'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = undefined;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _JWT_Create = require('./JWT_Create');

var _config = require('../config/config');

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

//Function login with token recieve email and password and generates a token expires in 24hrs 
//create function for controller to call
var login = function login(req) {
    return new Promise(function (resolve, reject) {
        User.find({
            where: { email: req.body.email }
        }).then(function (user) {
            // data, encrypted, callback(cb)
            _bcryptNodejs2.default.compare(req.body.password, user.password, function (err, result) {
                if (err) reject(err);else {
                    // Si no hay error evaluar el resultado de la comparación
                    // true => match => generar y resolver el token
                    if (result) {
                        var tokenUser = {
                            id: user.id,
                            correo: user.email,
                            nombre: user.nombre
                        };

                        var token = _jsonwebtoken2.default.sign(tokenUser, _config.key, { expiresIn: 86400 });
                        resolve(token);
                    } else {
                        // result = false => no coinciden   => reject false
                        resolve(result);
                    }
                }
            }); //end compare
        }) //end find by email then
        .catch(function (err) {
            reject(err);
        });
    }); // end return Promise
};

exports.login = login;