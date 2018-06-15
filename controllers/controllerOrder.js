import { createUserMan, patchUserMan, deleteUserMan, getByIdMan } from '../managers/managerUser'
import { createOrderCartId, getOrderById, patchOrderStatus } from '../managers/managerOrder'

//Create new order - CREATE
const createOrder = (req, res) => {
    let data = req.body
    createOrderCartId(data)
        .then((order) => {
            if (order) {
                res.status(201).json(order) //ok

            } else {
                res.status(400).json('err on controller') //error   
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ 'message': 'error on create' })
        })
}



//Get user by orderId- Read 

const getByOrderId = (req, res) => {
    console.log(req.body)
    const { uid } = req.params
    console.log(uid)
    Order.findById(uid).then(order => {
        res.send(order)
    }).catch(err => {
        res.status(404).send(err)
    })
}

const patchOrder = (req, res) => {
    patchOrderStatus(req)
        .then((order) => {
            if (order) {
                res.status(202).json(order)
            } else {
                res.status(400).json('we couldnt update the order info')
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ 'message': err })
        })
}





export {
    createOrder,
    getOrderById,
    patchOrderStatus
}