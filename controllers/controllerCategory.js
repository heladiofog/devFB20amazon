import {createCategoryMan} from '../managers/managerCategory'


const createCategory = (req, res) => {
    let data = req.body
    createIdMan(data)
        .then( (category) => {
            if(category){
                res.status(201).json(category)
            } else{
                res.status(400).json('err on controller')
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({'message': 'error on create Category'})
        })
}

export{
    createCategory
}