'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCart = sequelize.define('UserCart', {
    CartId:{ 
      allowNull: false,
      type: DataTypes.UUID,
     },
    UserId:{ 
      allowNull: false,
      type: DataTypes.UUID
        },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },

  }, {});
  UserCart.associate = function(models) {
    // associations can be defined here
  };
  return UserCart;
};