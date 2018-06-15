"use strict";

module.exports = function (sequelize, Sequelize) {
    var Category = sequelize.define("Category", {
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Category.associate = function (models) {
        Category.hasMany(models.Product);
    };

    return Category;
};