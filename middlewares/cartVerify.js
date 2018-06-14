import {getCartByUserId, createCartFirst} from '../controllers/cart';

//This will verify if cart is already created when pushing a product to te cart
//Project.findOne({ where: {title: 'aProject'} }).then(project => {
  // project will be the first entry of the Projects table with the title 'aProject' || null
//})
//http://docs.sequelizejs.com/manual/tutorial/models-usage.html


const verifyCart = (req, res, next) =>{
    if(getCartByUserId(req.user.id)){
        req.user = data
        next();     
    }else {
        createCartFirst(req.user.id)
        next(); 
    }       
}

