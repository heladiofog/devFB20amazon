
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
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genero:{
        type: DataTypes.STRING,
        validate:{
            allowNull: true
        }
    },
    metodoDePago:{
        type: DataTypes.STRING,
        validate:{
            allowNull: true
        }
    },
    password:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    fechaDeNacimiento:{
        type: DataTypes.DATE,
        validate:{
            isDate: true,
            allowNull: true
        }
    }
  })
}



  