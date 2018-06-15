'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteUserMan = exports.patchUserMan = exports.getByIdMan = exports.createUserMan = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

//Create new user - CREATE
var createUserMan = function createUserMan(userData) {
    return new Promise(function (resolve, reject) {
        User.create({
            email: userData.email,
            name: userData.name,
            password: userData.password,
            gender: userData.gender,
            birdthDate: userData.birdthDate,
            status: userData.status
        }).then(function (user) {
            resolve(user);
        }).catch(function (err) {
            reject(err);
        });
    });
};

//Get user by Id - Read 

var getByIdMan = function getByIdMan(iduser) {
    return new Promise(function (resolve, reject) {
        console.log(iduser);
        User.findById(iduser).then(function (user) {
            resolve(user);
        }).catch(function (err) {
            reject(err);
        });
    });
};

var patchUserMan = function patchUserMan(req) {
    return new Promise(function (resolve, reject) {
        User.update({
            name: req.body.name,
            gender: req.body.gender,
            birdthDate: req.body.birdthDate
        }, {
            where: {
                id: req.user.id
            }
        }).then(function (user1) {
            getById(req.user.id).then(function (user) {
                return resolve(user);
            }).catch(function (err) {
                return reject(err);
            });
        }).catch(function (err) {
            reject(err);
        });
    });
};

var deleteUserMan = function deleteUserMan(req) {
    return new Promise(function (resolve, reject) {
        User.destroy({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            gender: req.body.gender,
            birdthDate: req.body.birdthDate,
            status: req.body.status
        }, {
            where: {
                id: req.user.id
            }
        }).then(function (user2) {
            deleteUser(req.user.id).then(function (user) {
                return resolve(user);
            }).catch(function (err) {
                return reject(err);
            });
        }).catch(function (err) {
            reject(err);
        });
    });
};

exports.createUserMan = createUserMan;
exports.getByIdMan = getByIdMan;
exports.patchUserMan = patchUserMan;
exports.deleteUserMan = deleteUserMan;