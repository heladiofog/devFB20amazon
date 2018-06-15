'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCategoryMan = exports.createCategoryMan = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = _models2.default.Category;

var createCategoryMan = function createCategoryMan(categoryData) {
    return new Promise(function (resolve, reject) {
        Category.create({
            name: categoryData.name,
            description: categoryData.description
        }).then(function (category) {
            resolve(category);
        }).catch(function (err) {
            reject(err);
        });
    });
};

var getCategoryMan = function getCategoryMan(Category) {
    return new Promise(function (resolve, reject) {
        console.log(Category);
        Category.find(Category).then(function (user) {
            resolve(category);
        }).catch(function (err) {
            reject(err);
        });
    });
};

exports.createCategoryMan = createCategoryMan;
exports.getCategoryMan = getCategoryMan;