module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        name: {
            types: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Category.associate = function(models){

    };
    
    return Category;
};