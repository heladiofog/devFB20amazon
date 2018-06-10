'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {

    status:{ 
      allowNull: false,
      type: DataTypes.INTEGER
       
      
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

  }, {});
  
    
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User);
    //Cart.hasMany(models.det_order);
    //Cart.hasMany(models.AddressId);
  };
  return Cart;
};




