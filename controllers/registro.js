import bcrypt from 'bcrypt-nodejs';
import bodyParser from 'body-parser';

const saltRounds = 10;
const myPlaintextPassword ='s0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    if (re==true) {
    return email;
  }
    else {
      return alert("Correo no valido");
    }
  }

let crypt = (req.body.password) => {
  return new Promise ((resolve,reject)=>{
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(req.body.password,salt,null,(err,hash) => {
        console.log(hash);
        resolve(hash)
        if(err)
        reject(err)
      });
      reject(err)
    });
  });


app.post("/api/v1/user/create",(req,res)=>{
  const {email,nombre,telefono,genero,metodoDePago,password} = req.body
  let newUser = User({
    emai:emai,
    nombre:nombre,
    telefono:telefono,
    genero:genero,
    metodoDePago:metodoDePago,
    password:password,
    fechaDeNacimiento:fechaDeNacimiento
  });
   newUser.save((err,User) => {
     if(err) throw err;
     res.send(User);
   });
});
export {
  crypt
}
