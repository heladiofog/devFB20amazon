'use strict';
module.exports = (sequelize, Sequelize) => {
  var Det_Order = sequelize.define('Det_Order', {
    OrderId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    CartId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    ProductId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Quantity: {
      type: Sequelize.INTEGER,
      required: true
    },
    UnitPrice: {
      type: Sequelize.NUMERIC,
      required: true
    }
  },
);
  Det_Order.associate = function(models) {
  Det_Order.belongsTo(models.Cart);
  Det_Order.belongsTo(models.Order);
  Det_Order.hasMany(models.Product);
  };
  return Det_Order;
};
