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
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },

            status: {
                type: DataTypes.STRING,
                allowNull: true
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true
            },
            paymethod: {
                type: DataTypes.STRING,
                allowNull: true
            },

            totalPrice: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },

            idUser: {
                type: DataTypes.INTEGER,
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