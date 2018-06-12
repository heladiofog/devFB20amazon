import db from '../models';
import {createCategory} from '../controllers/controllerCategory'

const Category = db.Category

const createCategoryMan = (categoryData) => {
    return new Promise ( (resolve, reject) =>{
        Category.create({
            name: categoryData.name,
            description: categoryData.description
        }).then((category) =>{
            resolve(category);
        }).catch((err) =>{
            reject(err)
        })
    })
}

export{
    createCategoryMan
}