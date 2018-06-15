
import db from '../models'

const Det_Order = db.Det_Order
const Cart = db.Cart
const Product = db.Product

const createDet_OrderMan = (det_orderData) => {
  return new Promise((resolve,reject) => {
    Det_Order.create({
      CartId: det_orderData.CartId,
      ProductId: det_orderData.ProductId,
      UnitPrice: det_orderData.UnitPrice,
      Quantity: det_orderData.Quantity,
      NameProduct: det_orderData.NameProduct
    }).then((det_order) => {
      resolve(det_order);
    }).catch((err) => {
      reject(err);
    })
  });
};

const patchDet_OrderMan = (req) => {
  return new Promise ((resolve, reject) => {
    Det_Order.update({
      UnitPrice: req.body.UnitPrice,
      Quantity: req.body.Quantity
    },{
      where:{
        id.req.det_order.id
      }
    }).then(det_orderp => {
      getById(req.det_order.id)
        .then(det_order => resolve(det_order))
        .catch(err => reject(err))
    }).catch(err => {
      reject(err)
    });
  });
}

export{
  createDet_OrderMan,
  patchDet_OrderMan
}
