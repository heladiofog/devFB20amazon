'use strict';
module.exports = (sequelize, DataTypes) => {
  var det_order = sequelize.define('det_order', {
    order_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    cart_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      required: true
    },
    unit_price: {
      type: DataTypes.NUMERIC,
      required: true
    }
  },
);
  det_order.associate = function(models) {
  det_order.belongsTo(models.User);
  };
  return det_order;
};
