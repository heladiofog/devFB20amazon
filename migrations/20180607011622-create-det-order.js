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
      OrderId: {
        type: Sequelize.INTEGER,
        allowNull: false
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
