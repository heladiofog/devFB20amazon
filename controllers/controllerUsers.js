import {createUserMan} from '../managers/managerUser'
import {patchUserMan} from '../managers/managerUser'

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



//Get user by Id - Read 

// const getById = (req, res) => {
//     console.log(req.body)
//     const {uid} = req.params
//         console.log(uid)
//     User.findById(uid).then(user => {
//         res.send(user)
//     }).catch(err =>{
//         res.status(404).send(err)
//     })
// }



//Update users - Update
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
// app.listen(3000, () =>{
//     console.log('Server on 3000')
// })

export{
    createUser
}