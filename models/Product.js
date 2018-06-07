

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Product', {
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
            type: DataTypes.BLOB
        },

        //Sirve para ver el estado del producto (borrado logico)
        status:{ 
            type: DataTypes.BOOLEAN,
            validate:{
               defaultValue: true 
            },
             
        
        }
        
    })






}