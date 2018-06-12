

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        shortName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
                
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
        unitPrice:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        
        itemSKU:{
            type: DataTypes.STRING,
            allowNull: false
        },

        Stock:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        image:{
            type: DataTypes.STRING
        },

        CategoryId:{
            type: DataTypes.INTEGER
        },

        //Sirve para ver el estado del producto (borrado logico)
        status:{ 
            type: DataTypes.BOOLEAN,
            validate:{
               defaultValue: true 
            },
        }
        
        

    })

    Product.associate = function(models) {
        // associations can be defined here
        Product.belongstoMany(models.Category)
        // Product.belongsto(models.det_order),
        // Product.hasMany(models.Cart)
    };

    return Product;

}