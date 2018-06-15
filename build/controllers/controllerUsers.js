'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteUser = exports.getById = exports.patchUser = exports.createUser = undefined;

var _managerUser = require('../managers/managerUser');

//Create new user - CREATE
var createUser = function createUser(req, res) {
    var data = req.body;
    (0, _managerUser.createUserMan)(data).then(function (user) {
        if (user) {
            res.status(201).json(user); //ok
        } else {
            res.status(400).json('err on controller'); //error   
        }
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({ 'message': 'error on create' });
    });
};

var patchUser = function patchUser(req, res) {
    (0, _managerUser.patchUserMan)(req).then(function (user) {
        if (user) {
            res.status(202).json(user);
        } else {
            res.status(400).json('we couldnt update the user info');
        }
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({ 'message': err });
    });
};

var deleteUser = function deleteUser(req, res) {
    (0, _managerUser.deleteUserMan)(req).then(function (user) {
        if (user) {
            res.status(202).json(user);
        } else {
            res.status(400).json("Couldnt delete the user");
        }
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({ 'message': err });
    });
};

//Get user by Id - Read 

var getById = function getById(req, res) {
    console.log(req.body);
    var uid = req.params.uid;

    console.log(uid);
    User.findById(uid).then(function (user) {
        res.send(user);
    }).catch(function (err) {
        res.status(404).send(err);
    });
};

exports.createUser = createUser;
exports.patchUser = patchUser;
exports.getById = getById;
exports.deleteUser = deleteUser;