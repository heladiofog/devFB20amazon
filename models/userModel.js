
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate:{
          isEmail: true,
          notEmpty: true
      }
    },
    nombre: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    
    
    password:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    }

  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
}



  