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
       AddressId:{ 
        allowNull: true,
        type: DataTypes.INTEGER,
       },
       paymentMethod:{ 
        allowNull: true,
        type: DataTypes.STRING,
       },
       OrderId:{ 
        allowNull: true,
        type: DataTypes.INTEGER,
       },
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Carts');
  }
};




