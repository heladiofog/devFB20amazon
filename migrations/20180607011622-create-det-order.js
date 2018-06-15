'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Det_Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CartId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Quantity: {
        type: Sequelize.INTEGER,
        required: true
      },
      UnitPrice: {
        type: Sequelize.NUMERIC,
        required: true
      },
      NameProduct: {
        type: Sequelize.STRING,
        required: false
      }
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
    return queryInterface.dropTable('Det_Orders');
  }
};
