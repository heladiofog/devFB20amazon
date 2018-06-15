
import db from '../models';


const Product = db.Product

//CREATE new product - CREATE
const createProductMan = (productData) => {
    console.log(productData)
    return new Promise ((resolve,reject)=>{
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
        }).then((product) => {
            resolve (product);
        }).catch((err) => {
            reject(err)
        })
    })
}


// READ products - Get

const getProductsMan = (productData) => {
    return new Promise ((resolve, reject) =>{
        Product.findAll({
            attributes:['shortName','description','image'],
            where:{
                status: true
            }
        }).then(product => {
            resolve(product)
        }).catch(err =>{    
            reject(err)
        }) 
    })
    
 }


 const topTenMan = (productData) => {
    return new Promise ((resolve, reject) =>{
        Product.findAll({
            attributes:['shortName','description','image'],
            where:{
                status: true,
                CategoryId: 14
            }
        }).then(product => {
            resolve(product)
        }).catch(err =>{    
            reject(err)
        }) 
    })
    
 } 


 //READ product by CategoryId - Get 

const getByCategoryIdMan = (CategoryId) => {
    return new Promise ((resolve, reject) =>{
        console.log(CategoryId)
        Product.findById(CategoryId).then(product => {
            resolve(user)
        }).catch(err =>{    
            reject(err)
        }) 
    })
    
 }



//READ product by Id [Detalle de Producto]- Get 

const getByIdMan = (idproduct) => {
    return new Promise ((resolve, reject) =>{
        console.log(idproduct)
        Product.findById(idproduct).then(product => {
            resolve(user)
        }).catch(err =>{    
            reject(err)
        }) 
    })
    
 }



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


export{
    createProductMan,
    getProductsMan,
    getByCategoryIdMan,
    getByIdMan,
    topTenMan
}





