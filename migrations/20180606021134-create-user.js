'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                validate: {
                    isEmail: true,
                },
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },


            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            gender: {
                type: Sequelize.STRING
            },

            birthDate: {
                type: Sequelize.DATE
            },
            //Sirve para ver el estado del usuario (borrado logico)
            status: {
                type: Sequelize.BOOLEAN,
                validate: {
                    defaultValue: true
                },


            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};