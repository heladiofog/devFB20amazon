import jsonwebtoken from 'jsonwebtoken'

// var key =require('./confing')
import key from './config'

console.log(key)

const user={
    id:3,
    correo:"aaaa"
}
const cabecera={
    type:'JWT',
    alg:"HS256"
}


function generaToken(user,key){ 

    const token=jwt.sign({user},key,{
        expiresIn:86400
    })
    //console.log(token)
    return token
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

//var token=generaToken(user,key)
let token=generaToken(user,key)

// var res= verificar(token,key)
let res= verificarToken(token,key)

export {
    verificarToken,
    generaToken
} 