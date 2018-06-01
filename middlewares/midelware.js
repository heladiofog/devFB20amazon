import jwt from 'jsonwebtoken'
// var key =require('./confing')
import {key} from '../config/config'




const verifyToken = (req, res, next) =>{
        if(req.headers['authorization']){
                let bearer = req.headers['authorization']
                let token = bearer.split(' ')[1];
                jwt.verify(token,key, function(err,data)

            {
                if(err){
                    return(res.status(403).send(err))
                }
                else{
                    next();
                }
            });
        }else {return(res.status(403).send('Header is undefined'))}

}


export {
    verifyToken
} 
