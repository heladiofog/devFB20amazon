//importar verificar y generartoken
import bodyParser from 'body-parser'
import express from 'express'
import {login} from '../managers/auth'



const authlogin = (req, res) =>{ 
   login(req,res)
                .then((token)=> {res.status(200).send(token)})
                .catch((err)=> {res.status(400).send(err)})
};


export{
    authlogin
}
