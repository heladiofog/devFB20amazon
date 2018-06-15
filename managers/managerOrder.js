import db from '../models';


const Cart = db.cart
const Order = db.order
const Det_order = db.det_order

//Create new order - CREATE
const createOrderCartId = (cartId) => {
    return new Promise((resolve, reject) => {
        //get information from cart table4

        const cartData = Cart.findById(cartId).then(cart => {
                resolve(cart)
            }).catch(err => {
                reject(console.log("error in data cart"))
            })
            //get information from det_order table

        const detOrderData = Det_order.findById(cartId).then(det_order => {
            resolve(det_order)
        }).catch(err => {
            reject(console.log("error in data det_order"))
        })


        Order.create({
            orderStatus: 'processing',
            paymethod: cartData.paymethod,
            cartId: cartData.cartId,
            userId: cartData.userId,
            addressId: cartData.addressId,
            totalPrice: detOrderData.price * detOrderData.qty
        }).then((order) => {
            resolve(order);
            //patchCartbyOrderId(order.orderId)
            Cart.update({
                orderId: order.id
            }, {
                where: {
                    id: order.cartId
                }
            }).then(cart1 => {
                console.log("idOrder updated")
            }).catch(err => {
                reject(err)
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

// const cartData = cartId => Cart.findById(cartId).then(cart => {
//         resolve(cart)
//     }).catch(err => {
//         reject(console.log("error in data cart"))
//     })
//     //get information from det_order table
// const detOrderData = cartId => Det_order.findById(cartId).then(det_order => {
//         resolve(det_order)
//     }).catch(err => {
//         reject(console.log("error in data det_order"))
//     })
//Get order by orderId - Read 

const getOrderById = (orderId) => {
    return new Promise((resolve, reject) => {
        console.log(orderId)
        Order.findById(orderId).then(order => {
            resolve(order)
        }).catch(err => {
            reject(err)
        })
    })

}

//Update the orderStatus from Order table and status from the Cart table
const patchOrderStatus = (req) => {
    return new Promise((resolve, reject) => {
        Order.update({
            orderStatus: 'fulfilled',
        }, {
            where: {
                id: req.body.orderId
            }
        }).then(cartId => {
            resolve(order)
            Cart.update({
                status: false,
            }, {
                where: {
                    id: req.body.cartId
                }
            })

        }).catch(err => {
            reject(err)
        })
    })
}


export {
    createOrderCartId,
    getOrderById,
    patchOrderStatus
}