'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
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
  }, {});
  
    
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User);
    Cart.hasMany(models.Det_Order);

  };
  return Cart;
};




