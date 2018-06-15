import {createAddressMan, getAddressByIdMan} from '../managers/managerAddress'

//Create a new Address - CREATE
const createAddress = (req, res) => {
    let data = req.body
    createAddressMan(req)
    .then((address) => {
        if (req.user) {
            res.status(201).json(address)//ok
        }else{
            res.status(400).json('err on controller')//error
        }
    }).catch(err => {
        console.log(err)
        res.status(500).json({'message':'error on create'})
    })
}

const getAllById = (req,res) => {
    console.log(req.user.id)
    let uid = req.user.id
    getAddressByIdMan(uid)
    .then((address) => {
        if (address){
            res.send(address)
        }else{
            res.status(404).send(err)
        }
    })
}

export{
    createAddress,
    getAllById
}
