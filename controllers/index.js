const testApi = (req, res) => {
    res.json({test:"Server start"})
}


//Added s1-002
const login = (req, res) => {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    //   var token = jwt.sign({ id: user._id }, config.secret, {
    //     expiresIn: 86400 // expires in 24 hours
    // });
    
      res.status(200).send({ auth: true, token: token });
    });
  });



export{
    testApi,
    login
}

