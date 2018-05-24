
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('user', {
    
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate:{
          isEmail: true,
          notEmpty: true
      }
    },
    nombre: {
        type: Sequelize.STRING,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: true
    },
    genero:{
        type: Sequelize.STRING,
        validate:{
            allowNull: true
        }
    },
    metodoDePago:{
        type: Sequelize.STRING,
        validate:{
            allowNull: true
        }
    },
    password:{
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    fechaDeNacimiento:{
        type: Sequelize.DATE,
        validate:{
            isDate: true,
            allowNull: true
        }
    }
  })
}



  