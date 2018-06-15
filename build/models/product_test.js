'use strict';

module.exports = function (sequelize, DataTypes) {
  var Product_test = sequelize.define('Product_test', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false
    },
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Product_test.associate = function (models) {
    //Product(models.Category);
  };
  return Product_test;
};