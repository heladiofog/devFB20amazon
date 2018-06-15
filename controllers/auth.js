//importar verificar y generartoken
import bodyParser from 'body-parser'
import express from 'express'
import {login} from '../managers/auth'


// Este método es un login, regresa el token y true o el error o datos incorrectos
const authlogin = (req, res) => { 
    login(req)
    .then((token) => {
        // Si el resultado es un token (!== false)
        if (token) {
            // todo Ok, devuelve un token y auth true
            res.status(200)
            .send({
                auth: true,
                token: token
            });
        } else {
            // Error en la validación => unauthorized
            // Correo y/o contraseña inválidos
            res.status(401)
            .send({
                auth: false,
                token: null,
                message: "Correo y/o contraseña inválidos"
            });
        }
    })
    .catch((err)=> {
        res.status(500).send({
            auth: false,
            error: err,
            message: "Por el momento no es posible atender tu petición."
        });
    });
}

export {
    authlogin
}
