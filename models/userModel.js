
module.exports = (sequelize, DataTypes) => {
var User = sequelize.define('user', {
    
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
            isAlpha: true,
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
}



  