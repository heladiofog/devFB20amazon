const getByIdOrder = (idOrder) => {
    return new Promise((resolve, reject) => {
        console.log(idOrder)
        Order.findById(idOrder).then(order => {
            resolve(order)
        }).catch(err => {
            reject(err)
        })
    })

}