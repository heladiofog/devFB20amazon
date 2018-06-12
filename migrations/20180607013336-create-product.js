'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Product', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
          },
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
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Product');
  }
};