'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate:{
            isEmail: true,
        },
        allowNull: false
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      
      
      password:{
          type: DataTypes.STRING,
          allowNull: false
      },
      
      gender:{
          type: DataTypes.STRING
      },
      
      birthDate:{
          type: DataTypes.DATE
      },
      //Sirve para ver el estado del usuario (borrado logico)
      status:{ 
          type: DataTypes.BOOLEAN,
          validate:{
            defaultValue: true 
          },
          
      
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Users');
  }
};