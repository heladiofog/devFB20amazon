'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifyToken = function verifyToken(req, res, next) {
    if (req.headers['authorization']) {
        var bearer = req.headers['authorization'];
        var token = bearer.split(' ')[1];
        _jsonwebtoken2.default.verify(token, _config.key, function (err, data) {
            if (err) {
                return res.status(403).send(err);
            } else {
                req.user = data;
                next();
            }
        });
    } else {
        return res.status(403).send('Header is undefined');
    }
};
// var key =require('./confing')
exports.verifyToken = verifyToken;