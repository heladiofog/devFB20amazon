'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // Product belongsToMany Tag
    return queryInterface.createTable('ProductCategory', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      product_id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      category_Id: {
        type: Sequelize.UUID,
        primaryKey: true
      }
    });
  },

  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.dropTable('users');
    */
    // remove table
    return queryInterface.dropTable('ProductCategory');
  }
};