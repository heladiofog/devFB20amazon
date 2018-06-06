'use strict';
import bcrypt from 'bcrypt-nodejs'
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
    },

    gender:{
        type: DataTypes.STRING,
        validate: {
            allowNull: true
        }
    },
    
    birdthDate:{
        type: DataTypes.STRING,
        validate:{
            isDate: true,
            allowNull: true
        }
    },
    //Sirve para ver el estado del usuario (borrado logico)
    status:{ 
        type: DataTypes.BOOLEAN,
        validate:{
           allowNull: false,
           defaultValue: true 
        } 
        
    }

  })

//   genero:{}

  User.beforeCreate((user)=>{
    return crypt(user.password) 
       .then(success => {user.password = success})
       .catch(err => {
           if (err) 
        console.log(err)
       })
        
   })
   
   let crypt = (password) => {
       return new Promise ((resolve,reject)=>{
        bcrypt.genSalt(10,(err,salt)=>{
            if(err) reject(err)
            bcrypt.hash(password,salt,null,(err,hash) => {
                if(err) reject(err)
                resolve(hash)
                
            });
        });
    });
   }
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
}

// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {}, {});
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };