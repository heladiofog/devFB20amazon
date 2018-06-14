'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
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
        allowNull: false,
        required: true
    },
    
    itemSKU:{
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },

    stock:{
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true
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
    return queryInterface.dropTable('Products');
  }
};