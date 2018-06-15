'use strict';
module.exports = (sequelize, Sequelize) => {
  const Det_Order = sequelize.define('Det_Order', {
    CartId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ProductId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Quantity: {
      type: Sequelize.INTEGER,
      required: true
    },
    UnitPrice: {
      type: Sequelize.NUMERIC,
      required: true
    },
    NameProduct: {
      type: Sequelize.STRING,
      requiered: false
    }
  },
);
  Det_Order.associate = function(models) {
  Det_Order.belongsTo(models.Cart);
  Det_Order.hasMany(models.Product);
  };
  return Det_Order;
};
