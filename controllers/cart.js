import {createCartMan, patchCartMan, deleteCartMan, getCartByIdMan, getCartByUserIdMan} from '../managers/cart'

//This creates a Cart
const createCart = (req, res) => {
    let data = req
    createCartMan(data)
    .then((cart) => {
        if (cart) {
            res.status(201).json(cart) //ok
            
        } else {
            res.status(400).json('err on controller')//error   
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({'message' :'error on cart create'})
    })
}


//PATCH USER change to patch cart
const patchCart = (req, res) =>{
    patchCartMan(req)
        .then((cart) =>{
            if(cart){
                res.status(202).json(cart)
            } else{
                res.status(400).json('we couldnt update the Cart info')
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({'message': err})
        })
}

//Get cart by Id - Read 

const getCartById = (req, res) => {
    getCartByIdMan(req.params)
      .then(cart => {
        res.send(cart)
    }).catch(err =>{
        res.status(404).send(err)
    })
}



//Get cart by UserId - Read 

const getCartByUserId = (req, res) => {
    getCartByUserIdMan(req.params)
      .then(cart => {
        res.send(cart)
    }).catch(err =>{
        res.status(404).send(err)
    })
}

//Delete cart
const deleteCart = (req, res) => {
    deleteCartMan(req)
     .then((cart) => {
         if(cart){
             res.status(202).json({'message' :'Cart deleted'})
         } else{
             res.status(400).json("Couldnt delete the Cart")
         }
     })
     .catch(err => {
         console.log(err)
         res.status(500).json({'message': err})
     }) 
 }

 export{
    createCart,
    patchCart,
    getCartById,
    deleteCart,
    getCartByUserId
}