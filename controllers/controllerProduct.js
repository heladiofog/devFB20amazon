
import {createProductMan, getProductsMan, getByCategoryIdMan, ggetByIdMan} from '../managers/managerProduct'


//CREATE new product - CREATE
const createProduct = (req, res) => {
    let data = req.body
    createProductMan(data)
    .then((product) => {
        if (product) {
            res.status(201).json(product) //ok
            
        } else {
            res.status(400).json('err on controller')//error   
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({'message' :'error on create'})
    })
}

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

const getProducts = (req, res) => {
    console.log(req.body)
    Product.get().then(product => {
        res.send(product)
    }).catch(err =>{
        res.status(404).send(err)
    })
}

//READ product by Id [Detalle de Producto]- Get 

const getById = (req, res) => {
    console.log(req.body)
    const {uid} = req.params
        console.log(uid)
    Product.findById(uid).then(product => {
        res.send(product)
    }).catch(err =>{
        res.status(404).send(err)
    })
}


//READ product by CategoryId - Get 

const getByCategoryId = (req, res) => {
    console.log(req.body)
    const {CategoryId} = req.params
        console.log(CategoryId)
    Product.findById(CategoryId).then(product => {
        res.send(product)
    }).catch(err =>{
        res.status(404).send(err)
    })
}





export{
    createProduct,
    getProducts,
    getById,
    getByCategoryId
}




