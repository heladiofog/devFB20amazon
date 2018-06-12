

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        shortName: {
            type: Sequelize.STRING,
            allowNull: false,
            required:true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            required:true
        },
                
        description:{
            type: Sequelize.STRING,
            allowNull: false
        },
        
        unitPrice:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: false,
            required:true
        },
        
        itemSKU:{
            type: Sequelize.STRING,
            allowNull: false,
            required:true
        },

        stock:{
            type: Sequelize.INTEGER,
            allowNull: false,
            required:true
        },

        image:{
            type: Sequelize.STRING,
            required:true
        },

        CategoryId:{
            type: Sequelize.INTEGER
        },

        //Sirve para ver el estado del producto (borrado logico)
        status:{ 
            type: Sequelize.BOOLEAN,
            validate:{
               defaultValue: true 
            },
        }
        
        

    })

    Product.associate = function(models) {
        // associations can be defined here
        Product.belongsto(models.Category)
    };

    return Product;

}