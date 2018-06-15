'use strict';
module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            orderStatus: {
                type: DataTypes.ENUM,
                values: ['processing', 'fulfilled'],
                allowNull: true
            },
            paymethod: {
                type: DataTypes.STRING,
                allowNull: false
            },
            //Keys imported from Cart
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cartId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            addressId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            totalPrice: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }

            //         createdAt: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // },
            // updatedAt: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // }

        });
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('Orders');
    }
};