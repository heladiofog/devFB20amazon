//importar verificar y generartoken
import bodyParser from 'body-parser'
import express from 'express'
import {login} from '../managers/auth'


// Este método es un login, regresa el token y true o el error
const authlogin = (req, res) =>{ 
    login(req)
    .then((token)=> {
        res.status(200).send(
            {
                auth : true,
                token: token
            }
    )})
    .catch((err)=> {
        res.status(400).send(
            {
                auth:false,
                error:err
            }
        )
    });

};


export {
    authlogin
}
