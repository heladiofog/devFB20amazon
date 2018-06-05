module.exports = (sequelie, DataTypes) => {
    const Name = sequelize.define('Name', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        allowNull: false

    })
}
