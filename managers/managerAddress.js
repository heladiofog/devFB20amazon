import db from '../models';

const Address = db.Address

//Create new Address - CREATE
const createAddressMan = (req) => {
    return  new Promise ((resolve,reject)=>{
        Address.create({
            street: req.body.street,
            district: req.body.district,
            numExt: req.body.numExt,
            numInt: req.body.numInt,
            city: req.body.city,
            country: req.body.country,
            cc: req.body.cc,
            UserId: req.user.id
        }).then((address) =>{
            resolve (address);
        }).catch((err)=>{
            reject(err)
        })
    })
}

const getAddressByIdMan = (idUser) => {
    return new Promise ((resolve,reject) => {
        console.log(idUser)
        Address.findAll({
            where: {
                UserId: idUser
            }
        }).then(address =>{
            resolve(address)
        }).catch(err => {
            reject(err)
        })
    })
}

export{
    createAddressMan,
    getAddressByIdMan
}
