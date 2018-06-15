'use strict';

module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define('Product', {
        shortName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        description: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        unitPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        itemSKU: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        image: {
            type: DataTypes.STRING,
            required: true
        },

        CategoryId: {
            type: DataTypes.INTEGER
        },

        //Sirve para ver el estado del producto (borrado logico)
        status: {
            type: DataTypes.BOOLEAN
        }

    });

    Product.associate = function (models) {
        // associations can be defined here
        Product.belongsTo(models.Category);
        // Product.belongsto(models.det_order),
        // Product.hasMany(models.Cart)
    };

    return Product;
};