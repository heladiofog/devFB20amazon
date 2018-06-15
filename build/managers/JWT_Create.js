'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verificarToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cabecera = {
    type: 'JWT',
    alg: "HS256"
};
// var key =require('./confing')


function verificarToken(token, key) {
    _jsonwebtoken2.default.verify(token, key, function (err, data) {
        if (err) {
            console.log("error");
            return 403;
        } else {
            return data;
        }
    });
}

// var res= verificar(token,key)
//let res= verificarToken(token,key)

exports.verificarToken = verificarToken;