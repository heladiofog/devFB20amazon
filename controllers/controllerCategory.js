import db from '../models';

const Category = db.Category
const Product = db.Product

import { createCategoryMan, getCategoryMan } from "../managers/managerCategory"

//Create new Category
const createCategory = (req, res) => {
    let data = req.body
    createCategoryMan(data)
        .then( (category) => {
            if(category){
                res.status(201).json(category)
            } else{
                res.status(400).json('err on controller')
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({'message': 'error on create Category'})
        })
}

const getCategory = (req, res) => {
        console.log(req.body)
        Category.findAll().then(category =>{
            res.send(category)
        }).catch(err =>{
            res.status(404).send(err)
        })
}

const getProductByCategory = (req, res) =>{
    const {uid} = req.params
    console.log(uid)
        Product.findAll({
            where:{
                CategoryId: uid
            },
            attributes: [
                'description',
                'image',
                'name'
            ]
        }).then( product =>{
            res.send(product)
        }).catch(err => {
            res.status(404).send(err)
        })
}

export{
    createCategory,
    getCategory,
    getProductByCategory
}