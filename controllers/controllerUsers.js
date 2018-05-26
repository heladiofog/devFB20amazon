import express from 'express';
import db from '../models';

const User = db.User

//Create new user - CREATE
const createUser = (req, res) => {
    User.create({
        email: req.body.email,
        nombre: req.body.nombre,
        password: req.body.password
    }).then((user) => {
        res.status(201).json(user)
    }).catch((err) => {
        res.status(400).json(err)
    })
}

/*
app.post('/api/v1/users', (req, res) =>{
    const{ Id, email, nombre, telefono, genero, metodoDePago, password, fechaDeNacimiento} = req.body;
    let newUser = Users({
        Id,
        email,
        nombre, 
        telefono, 
        genero, 
        metodoDePago, 
        password, 
        fechaDeNacimiento
    });
    newUser.save((error, user) => {
        if(error) throw(error);
        res.status(201).send(user)
    });
});

//Todos los usuarios - READ
app.get('/users', (req, res) => {
    Users.find().exec()
        .then((user) => {
            res.send(user)
        }).catch((err) => {
            res.status(400).send(err)
        });
});

//Update users - Update
app.patch('/users/:uid' , (req, res) =>{
    const {uid} = req.params;
    Users.findByIdAndUpdate(uid, req.body, (err, user) =>{
        Users.findById(uid).exec()
            .then(user => res.send(user))
            res.send(user);
    }).catch(err => res.send(err));
});

//Delete all users - Delete

app.delete('/users/:uid', (req, res) =>{
    const {uid} = req.params;

    Users.findByIdAndRemove(uid).exec().then(
        user => res.send({message: "User not found!"})
    )
})

app.listen(3000, () =>{
    console.log('Server on 3000')
})*/

export{
    createUser
}