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
    }

  })

  User.beforeCreate((user)=>{
    console.log('before')
    return crypt(user.password) 
       .then(success => {console.log(success);user.password = success})
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
                console.log(hash);
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



  