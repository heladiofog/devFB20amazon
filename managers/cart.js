import db from '../models';


const Cart = db.Cart

//Update new Cart with products - CREATE
const createCartMan = (productpush) => {
    return new Promise ((resolve,reject)=>{
        getProd = (prod, res) => {
            findProduct(prod.data.id)
            .then((product) =>{
                  let producto = product;
                Cart.update({
                    UserId: req.user.id,
                    status: true

                }).then((cart) => {
                    
                    Det_Order.create({
                        CartId: cart.id,
                        ProductId: product.id,
                        NameProduct: product.name,
                        UnitPrice: product.price,
                        Quantity: product.quantity
                    })

                    resolve (cart);
                }).catch((err) => {
                    reject(err)
                }) 

            .catch(err => {
                console.log(err)
                res.status(400).json({'message' :'error on find'})
            })       
        })    
    }
});
}

const createCartFirst = (uid) => {
    return new Promise ((resolve, reject)=>{
        Cart.create({
                UserId: uid,
                status: true
        })
    });


}


//Get product by id
const findProduct = (idproduct)=> {
    Product.findById(idproduct).then(product => {
        resolve(product)
    }).catch(err =>{    
        reject(err)
    }) 
}


//Get cart by Id - Read 

const getCartByIdMan = (idcart) => {
    return new Promise ((resolve, reject) =>{
        console.log(idcart)
        Cart.findById(idcart).then(cart => {
            resolve(cart)
        }).catch(err =>{    
            reject(err)
        }) 
    })  
 }
//Get cart by user Id
const getCartByUserIdMan = (uid) => {
    return new Promise ((resolve, reject) =>{
        console.log(uid)
        Cart.findOne({ where: {UserId: {uid}} }).then(cart => {
            resolve(cart)
        }).catch(err =>{    
            reject(err)
        }) 
    })  
 }

 

 //PATCH CART
 const patchCartMan = (req) =>{
    return new Promise ((resolve, reject ) =>{
        Cart.update({
            status: req.body.status,
            paymethod: req.body.paymethod,
            addressId: req.body.addressId,
            orderId: req.body.orderId
        },{
            where:{
                id:req.cart.id
            }
        }).then(cart1 => {
            getById(req.cart.id)
                .then(cart => resolve(cart))
                .catch(err => reject(err))
        }).catch(err => {
            reject(err)
        })      
    })    
}

//DELETE CART
const deleteCartMan = (req) => {
    return new Promise( (resolve, reject) =>{
        Cart.destroy({
            status: false,
            UserId:UserId,
            AddressId:AddressId,
            paymentMethod:paymentMethod,
            OrderId:OrderId
        },{
            where:{
                id:req.cart.id
            }
        }).then(cart2 => {
            deleteCart(req.cart.id)
                .then(cart => resolve(res.status(200).json({'message' :'Cart deleted'})))
                .catch(err => reject(err))
            }).catch(err => {
                reject(err)
            })
    })
}


export{
    createCartMan,
    getCartByIdMan,
    patchCartMan,
    deleteCartMan,
    getCartByUserIdMan,
    createCartFirst
}
