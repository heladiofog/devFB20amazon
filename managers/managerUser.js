import db from '../models';

const User = db.User

//Create new user - CREATE
const createUserMan = (userData) => {
    return new Promise ((resolve,reject)=>{
        User.create({
            email: userData.email,
            nombre: userData.nombre,
            password: userData.password
        }).then((user) => {
            resolve (user);
        }).catch((err) => {
            reject(err)
        })
    })
}

//Get user by Id - Read 

const getById = (req, res) => {
    console.log(req.body)
    const {uid} = req.params
        console.log(uid)
    User.findById(uid).then(user => {
        res.send(user)
    }).catch(err =>{
        res.status(404).send(err)
    })
}

export{
    createUserMan,
    getById
}
