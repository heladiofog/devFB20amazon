"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var login = function login(req, res) {};

var testApi = function testApi(req, res) {
    res.json({ test: "Server start" });
};

exports.testApi = testApi;
exports.login = login;