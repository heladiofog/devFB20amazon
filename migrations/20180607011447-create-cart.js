'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      status:{ 
        allowNull: false,
        type: DataTypes.BOOLEAN
       
      },
          
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      
      UserId:{ 
        allowNull: false,
        type: DataTypes.INTEGER,
       },
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Carts');
  }
};




