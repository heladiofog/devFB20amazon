//importar verificar y generartoken
import bodyParser from 'body-parser'
import express from 'express'
import {login} from '../managers/auth'


// TODO Return "algo"
const authlogin = (req, res) =>{ 
   login(req)
                .then((token)=> {res.status(200).send({token: token})})
                .catch((err)=> {res.status(400).send(err)})
            
};


export {
    authlogin
}
