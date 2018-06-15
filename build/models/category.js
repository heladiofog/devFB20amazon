"use strict";

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Category.associate = function (models) {
        // Category.belongsToMany(models.Product);
    };

    return Category;
};