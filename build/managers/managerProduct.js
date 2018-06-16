'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.topTenMan = exports.getByIdMan = exports.getProductsMan = exports.createProductMan = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = _models2.default.Product;

//CREATE new product - CREATE
var createProductMan = function createProductMan(productData) {
    console.log(productData);
    return new Promise(function (resolve, reject) {
        Product.create({
            shortName: productData.shortName,
            name: productData.name,
            description: productData.description,
            unitPrice: productData.unitPrice,
            itemSKU: productData.itemSKU,
            stock: productData.stock,
            image: productData.image,
            CategoryId: productData.CategoryId,
            status: productData.status
        }).then(function (product) {
            resolve(product);
        }).catch(function (err) {
            reject(err);
        });
    });
};

// READ products - Get

var getProductsMan = function getProductsMan(productData) {
    return new Promise(function (resolve, reject) {
        Product.findAll({
            attributes: ['id', 'shortName', 'description', 'image'],
            where: {
                status: true
            }
        }).then(function (product) {
            resolve(product);
        }).catch(function (err) {
            reject(err);
        });
    });
};

var topTenMan = function topTenMan(productData) {
    return new Promise(function (resolve, reject) {
        Product.findAll({
            attributes: ['id', 'shortName', 'description', 'image'],
            where: {
                status: true,
                CategoryId: 14
            }
        }).then(function (product) {
            resolve(product);
        }).catch(function (err) {
            reject(err);
        });
    });
};

//READ product by CategoryId - Get 

var getByCategoryIdMan = function getByCategoryIdMan(CategoryId) {
    return new Promise(function (resolve, reject) {
        console.log(CategoryId);
        Product.findById(CategoryId).then(function (product) {
            resolve(product);
        }).catch(function (err) {
            reject(err);
        });
    });
};

//READ product by Id [Detalle de Producto]- Get 

var getByIdMan = function getByIdMan(idproduct) {
    return new Promise(function (resolve, reject) {
        console.log(idproduct);
        Product.findById(idproduct).then(function (product) {
            resolve(user);
        }).catch(function (err) {
            reject(err);
        });
    });
};

// const patchUserMan = (req) =>{
//     return new Promise ((resolve, reject ) =>{
//         User.update({
//             name: req.body.name,
//             gender: req.body.gender,
//             birdthDate: req.body.birdthDate,
//         },{
//             where:{
//                 id:req.user.id
//             }
//         }).then(user1 => {
//             getById(req.user.id)
//                 .then(user => resolve(user))
//                 .catch(err => reject(err))
//         }).catch(err => {
//             reject(err)
//         })      
//     })    
// }

// const deleteUserMan = (req) => {
//     return new Promise( (resolve, reject) =>{
//         User.destroy({
//             email: req.body.email,
//             name: req.body.name,
//             password: req.body.password,
//             gender: req.body.gender,
//             birdthDate: req.body.birdthDate,
//             status: req.body.status
//         },{
//             where:{
//                 id:req.user.id
//             }
//         }).then(user2 => {
//             deleteUser(req.user.id)
//                 .then(user => resolve(user))
//                 .catch(err => reject(err))
//             }).catch(err => {
//                 reject(err)
//             })
//     })
// }


exports.createProductMan = createProductMan;
exports.getProductsMan = getProductsMan;
exports.getByIdMan = getByIdMan;
exports.topTenMan = topTenMan;