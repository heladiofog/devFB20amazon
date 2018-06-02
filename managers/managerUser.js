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
    return new Promise ((resolve, reject) =>{
        console.log(iduser)
        User.findById(iduser).then(user => {
            resolve(user)
        }).catch(err =>{    
            reject(err)
        }) 
    })
    
}

const patchUserMan = (req) =>{
    return new Promise ((resolve, reject ) =>{
        User.update({
            nombre: req.body.nombre,
            genero: req.body.genero,
            fechaDeNacimiento: req.body.fechaDeNacimiento,
        },{
            where:{
                id:req.user.id
            }
        }).then(user1 => {
            getById(req.user.id)
                .then(user => resolve(user))
                .catch(err => reject(err))
        }).catch(err => {
            reject(err)
        })      
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
