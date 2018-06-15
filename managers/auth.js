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
    return new Promise ((resolve, reject) => {
        User.find({ 
            where: { email: req.body.email }
        })
        .then((user) => {
            // data, encrypted, callback(cb)
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) reject (err);
                else {
                    // Si no hay error evaluar el resultado de la comparación
                    // true => match => generar y resolver el token
                    if (result) {
                        let tokenUser = {
                            id:user.id,
                            correo: user.email,
                            nombre:user.nombre 
                        };

                        const token = jwt.sign(tokenUser, key, { expiresIn: 86400 });
                        resolve(token);
                    } else {
                        // result = false => no coinciden   => reject false
                        resolve(result);
                    }
                }
            }); //end compare
        }) //end find by email then
        .catch((err)=> {
            reject(err);
        });
    }); // end return Promise
};

export {
    login
}
