

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        shortName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
                
        description:{
            type: Sequelize.STRING,
            allowNull: false
        },
        
        unitPrice:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        },
        
        itemSKU:{
            type: Sequelize.STRING,
            allowNull: false
        },

        Stock:{
            type: Sequelize.INTEGER,
            allowNull: false
        },

        image:{
            type: Sequelize.BLOB
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