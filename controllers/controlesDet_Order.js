import {createDet_OrderMan} from '../managers/managerDet_Order'
import {patchDet_OrderMan} from '../managers/managerDet_Order'

//create new Det Order - CREATE
const createDet_Order = (req, res) =>{
  createDet_OrderMan(req)
       .then((det_order) => {
         if(det_order){
           res.status(202).json({'menssage': err})
         } else{
           res.status(400).json({'menssage': err})
         }
       })
       .catch(err => {
         res.status(500).json({'menssage': err})
       })
}

//patch Det Order -PATCH
const patchDet_Order = (req, res) => {
    patchDet_OrderMan(req)
        .then((det_order) => {
          if(det_order){
            res.status(202).json(det_order)
          } else {
            res.status(400).json({'menssage': err})
          }
        })
        .catch(err => {
           res.status(500).json({'menssage': err})
        })
}

//get Det Order -GET
const getByIdDet_Order = (req, res) => {
  const {uid} = req.params
  Det_Order.findById(uid).then(det_order => {
      res.send(det_order)
  }).catch(err =>{
      res.status(404).send(err)
  })
}

export{
  createDet_Order,
  patchDet_Order,
  getByIdDet_Order
}
