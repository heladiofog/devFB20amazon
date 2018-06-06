import {createUserMan, patchUserMan, deleteUserMan, getByIdMan} from '../managers/managerUser'

//Create new user - CREATE
const createUser = (req, res) => {
    let data = req.body
    createUserMan(data)
    .then((user) => {
        if (user) {
            res.status(201).json(user) //ok
            
        } else {
            res.status(400).json('err on controller')//error   
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({'message' :'error on create'})
    })
}

const patchUser = (req, res) =>{
    patchUserMan(req)
        .then((user) =>{
            if(user){
                res.status(202).json(user)
            } else{
                res.status(400).json('we couldnt update the user info')
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({'message': err})
        })
}

const deleteUser = (req, res) => {
   deleteUserMan(req)
    .then((user) => {
        if(user){
            res.status(202).json(user)
        } else{
            res.status(400).json("Couldnt delete the user")
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({'message': err})
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
    createUser,
    patchUser,
    getById,
    deleteUser
}