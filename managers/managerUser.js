import db from '../models';

const User = db.User

//Create new user - CREATE
const createUserMan = (userData) => {
    return new Promise ((resolve,reject)=>{
        User.create({
            email: userData.email,
            nombre: userData.nombre,
            password: userData.password,
            gender: userData.gender,
            birdthDate: userData.birdthDate,
            status: userData.status
        }).then((user) => {
            resolve (user);
        }).catch((err) => {
            reject(err)
        })
    })
}

//Get user by Id - Read 

const getById = (iduser) => {
    console.log(iduser)
    const {uid} = iduser
        console.log(uid)
    User.findById(uid).then(user => {
        res.send(user)
    }).catch(err =>{
        res.status(404).send(err)
    })
}

const patchUserMan = (iduser) =>{
    //console.log(iduser)
    const {uid} = iduser
    //console.log(uid)
    User.findByIdAndUpdate(uid, req.body, (err, user) =>{
        User.findById(uid)
            .then(user => res.send(user))
            res.send(user);
    })
}
// app.patch('/users/:uid' , (req, res) =>{
//         const {uid} = req.params;
//         Users.findByIdAndUpdate(uid, req.body, (err, user) =>{
//             Users.findById(uid).exec()
//                 .then(user => res.send(user))
//                 res.send(user);
//         }).catch(err => res.send(err));
//     });

export{
    createUserMan,
    getById,
    patchUserMan
}
