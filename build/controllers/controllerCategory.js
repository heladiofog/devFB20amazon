'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProductByCategory = exports.getCategory = exports.createCategory = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _managerCategory = require('../managers/managerCategory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = _models2.default.Category;
var Product = _models2.default.Product;

//Create new Category
var createCategory = function createCategory(req, res) {
    var data = req.body;
    (0, _managerCategory.createCategoryMan)(data).then(function (category) {
        if (category) {
            res.status(201).json(category);
        } else {
            res.status(400).json('err on controller');
        }
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({ 'message': 'error on create Category' });
    });
};

var getCategory = function getCategory(req, res) {
    console.log(req.body);
    Category.findAll().then(function (category) {
        res.send(category);
    }).catch(function (err) {
        res.status(404).send(err);
    });
};

var getProductByCategory = function getProductByCategory(req, res) {
    var uid = req.params.uid;

    console.log(uid);
    Product.findAll({
        where: {
            CategoryId: uid
        },
        attributes: ['description', 'image', 'name']
    }).then(function (product) {
        res.send(product);
    }).catch(function (err) {
        res.status(404).send(err);
    });
};

exports.createCategory = createCategory;
exports.getCategory = getCategory;
exports.getProductByCategory = getProductByCategory;