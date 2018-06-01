import jwt from 'jsonwebtoken'
// var key =require('./confing')
import {key} from '../config/config'


const cabecera={
    type:'JWT',
    alg:"HS256"
}


function verificarToken(token,key){
    jwt.verify(token,key,
    function(err,data){
        if(err){
            console.log("error")
            return(403)
        }
        else{
            console.log("-----------")
            console.log(data)
            return(data)
        }
    })


}


// var res= verificar(token,key)
//let res= verificarToken(token,key)

export {
    verificarToken
}
