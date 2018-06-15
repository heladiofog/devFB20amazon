'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('../controllers');

var _auth = require('../controllers/auth');

var _controllerUsers = require('../controllers/controllerUsers');

var _midelware = require('../middlewares/midelware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Prueba 
/**
 * @swagger
 * /test:
 *   get: 
 *     description: show server running
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: user email
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: password
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad request
 */

//Este test prueba la función verifyToken, si es correcto, entra la función testApi


//Added from s1-002
router.get('/test', _controllers.testApi);
router.post('/login', _auth.authlogin);
router.post('/users', _controllerUsers.createUser);
router.patch('/users', _midelware.verifyToken, _controllerUsers.patchUser);
router.delete('/users', _controllerUsers.deleteUser);

// router.get('/users', getById)


exports.default = router;