'use strict';

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            shortName: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: true
                }
            },
            name: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: true
                }
            },

            description: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: true
                }
            },

            unitPrice: {
                type: Sequelize.DECIMAL(10, 2),
                validate: {
                    notNull: true
                }
            },

            itemSKU: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: true
                }
            },

            stock: {
                type: Sequelize.INTEGER,
                validate: {
                    notNull: true
                }
            },

            image: {
                type: Sequelize.STRING
            },

            CategoryId: {
                type: Sequelize.INTEGER
            },

            //Sirve para ver el estado del producto (borrado logico)
            status: {
                type: Sequelize.BOOLEAN,
                validate: {
                    defaultValue: true
                }
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
    down: function down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Products');
    }
};