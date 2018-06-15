import {getCartByUserId, createCartFirst} from '../controllers/cart';

//This will verify if cart is already created when pushing a product to te cart
//Project.findOne({ where: {title: 'aProject'} }).then(project => {
  // project will be the first entry of the Projects table with the title 'aProject' || null
//})
//http://docs.sequelizejs.com/manual/tutorial/models-usage.html


const verifyCart = (req, res, next) =>{
    getCartByUserId(req.user.id)
    .then((cart) =>{
        if(cart){
            req.cart =cart; 
            next();  

        }else{
            req.cart = null;
            next(); 
        }
              
    })      
          
    .catch((cart) =>{
        console.log(err)
        res.status(500).json({'message': err})
    })     
};
