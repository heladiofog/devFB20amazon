'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Product', {
      shortName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
            
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    unitPrice:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    
    itemSKU:{
        type: Sequelize.STRING,
        allowNull: false
    },

    Stock:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    image:{
        type: Sequelize.BLOB
    },

    CategoryId:{
        type: Sequelize.INTEGER
    },

    //Sirve para ver el estado del producto (borrado logico)
    status:{ 
        type: Sequelize.BOOLEAN,
        validate:{
           defaultValue: true 
        },
    }
    
    

});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};