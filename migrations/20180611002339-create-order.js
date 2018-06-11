'use strict';
module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Orders', {
            idOrder: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },

            status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },


            paymethod: {
                type: DataTypes.STRING,
                allowNull: false
            },

            totalPrice: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },

        });
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('orders');
    }
};