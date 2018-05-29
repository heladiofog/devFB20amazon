//create function for controller to call
import bodyParser from 'body-parser'
import express from 'express'
import bcrypt from 'bcrypt-nodejs'
import {verificarToken} from './JWT_Create'
import {generaToken} from './JWT_Create'
import {key} from '../config/config'

//Added s1-002
const login = (req, res) => {

    return new Promise ((resolve, reject) =>{
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) reject (res.status(500).send('Error on the server.'));
            if (!user) reject (res.status(404).send('No user found.'));
            let passwordIsValid = bcrypt.compare(req.body.password, user.password);
            if (!passwordIsValid) reject (res.status(401).send({ auth: false, token: null }));
            const token = generaToken(user, key)
            resolve( res.status(200).send({ token: token }))
         });
        
    //   var token = jwt.sign({ id: user._id }, config.secret, {
    //     expiresIn: 86400 // expires in 24 hours
    // });
    
      
    });
};



export {
    login
}