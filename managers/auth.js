//create function for controller to call
import bodyParser from 'body-parser'
import express from 'express'
import bcrypt from 'bcrypt-nodejs'
import {verificarToken} from './JWT_Create'
import {key} from '../config/config'
import db from '../models'
import jwt from 'jsonwebtoken'
const User = db.User


//Function login with token recieve email and password and generates a token expires in 24hrs 
const login = (req) => {
    return new Promise ((resolve, reject) =>{
        User.find({where:{email:req.body.email}})
                .then((user)=> {
                    bcrypt.compare(req.body.password, user.password ,(err, respose)=>{
                    if (err) reject (err);
                    else {let tokenUser =
                        {
                            id:user.id, 
                            correo: user.email, 
                            nombre:user.nombre, 
                            expiresIn: 86400
                        }
                            const token=jwt.sign(tokenUser, key)
                    resolve(token)
                    }              
                })})
                .catch((err)=> {
                reject(err);
                })   
})};



export {
    login
}