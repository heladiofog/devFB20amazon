'use strict';
module.exports = (sequelize, Sequelize) => {
  var Address = sequelize.define('Address', {
    
    street: {
      type: Sequelize.STRING
    },
    district: {
      allowNull: false,
      type: Sequelize.STRING
    },
    numExt:{
      allowNull: true,
      type: Sequelize.STRING
    },
    numInt: {
      allowNull: true,
      type: Sequelize.STRING
    },
    city: {
      allowNull: false,
      type: Sequelize.STRING
    },
    country: {
      allowNull: false,
      type: Sequelize.STRING
    },
    cc: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    UserId: {
      allowNull: false,
      type: Sequelize.INTEGER
    }

  })

  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.User);
  };

  return Address;
};