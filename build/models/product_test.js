'use strict';

module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
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
  Product.associate = function (models) {
    Product.belongsToMany(models.Category, {
      through: 'ProductCategory'
    });
  };
  return Product;
};