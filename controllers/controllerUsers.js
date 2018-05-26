const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../models/userModel');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Create new user - CREATE

const createUser =  (req, res) =>{

    
    User.create({
        email: req.body.email,
        nombre: req.body.nombre, 
        password: req.body.password
    }).then((user) =>{
        res.status(201).send(user)
    }).catch((err) => {
        res.status(400).json(err)
    })
};

// //Todos los usuarios - READ
// app.get('/users', (req, res) => {
//     Users.find().exec()
//         .then((user) => {
//             res.send(user)
//         }).catch((err) => {
//             res.status(400).send(err)
//         });
// });

// //Update users - Update
// app.patch('/users/:uid' , (req, res) =>{
//     const {uid} = req.params;
//     Users.findByIdAndUpdate(uid, req.body, (err, user) =>{
//         Users.findById(uid).exec()
//             .then(user => res.send(user))
//             res.send(user);
//     }).catch(err => res.send(err));
// });

// //Delete all users - Delete

// app.delete('/users/:uid', (req, res) =>{
//     const {uid} = req.params;

//     Users.findByIdAndRemove(uid).exec().then(
//         user => res.send({message: "User not found!"})
//     )
// })


export{
    createUser
}