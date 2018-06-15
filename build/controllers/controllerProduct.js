'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTopten = exports.getByCategoryId = exports.getById = exports.getProducts = exports.createProduct = undefined;

var _managerProduct = require('../managers/managerProduct');

//CREATE new product - CREATE
var createProduct = function createProduct(req, res) {
    var data = req.body;
    (0, _managerProduct.createProductMan)(data).then(function (product) {
        if (product) {
            res.status(201).json(product); //ok
        } else {
            res.status(400).json('err on controller'); //error   
        }
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({ 'message': 'error on create' });
    });
};

// const patchUser = (req, res) =>{
//     patchUserMan(req)
//         .then((user) =>{
//             if(user){
//                 res.status(202).json(user)
//             } else{
//                 res.status(400).json('we couldnt update the user info')
//             }
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({'message': err})
//         })
// }

// const deleteUser = (req, res) => {
//    deleteUserMan(req)
//     .then((user) => {
//         if(user){
//             res.status(202).json(user)
//         } else{
//             res.status(400).json("Couldnt delete the user")
//         }
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json({'message': err})
//     }) 
// }


// READ products - Get

var getProducts = function getProducts(req, res) {
    (0, _managerProduct.getProductsMan)().then(function (product) {
        res.send(product);
    }).catch(function (err) {
        res.status(404).send(err);
    });
};

var getTopten = function getTopten(req, res) {
    (0, _managerProduct.topTenMan)().then(function (product) {
        res.send(product);
    }).catch(function (err) {
        res.status(404).send(err);
    });
};

//READ product by Id [Detalle de Producto]- Get 

var getById = function getById(req, res) {
    console.log(req.body);
    var uid = req.params.uid;

    console.log(uid);
    Product.findById(uid).then(function (product) {
        res.send(product);
    }).catch(function (err) {
        res.status(404).send(err);
    });
};

//READ product by CategoryId - Get 

var getByCategoryId = function getByCategoryId(req, res) {
    console.log(req.body);
    var CategoryId = req.params.CategoryId;

    console.log(CategoryId);
    Product.findById(CategoryId).then(function (product) {
        res.send(product);
    }).catch(function (err) {
        res.status(404).send(err);
    });
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.getById = getById;
exports.getByCategoryId = getByCategoryId;
exports.getTopten = getTopten;