import db from '../models';

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

const getCategoryMan = (Category) => {
    return new Promise ( (resolve, reject) => {
        console.log(Category)
        Category.find(Category).then(user =>{
            resolve(category)
        }).catch(err =>{
            reject(err)
        })
    })
}

export{
    createCategoryMan,
    getCategoryMan
}