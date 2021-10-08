const User = require('../model/User');
const jwt = require('jsonwebtoken')

module.exports.create = async (req, res) => {

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol
    }, (err, user) => {
        if (err) return res.status(500).send("Registration failed")



        res.status(200).json(user)
    })


};

module.exports.signin = async (req, res) => {
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(500).send("User not found")

  if(user.password != req.body.password) return res.status(401).json({toke:null,message:"Invalid password"})

  const token = jwt.sign({id:user.id,rol:user.rol,email:user.email},"users-api",{
    expiresIn:86400
  })
  res.json({token})
};


module.exports.list = async (req, res) => {
    const users = await User.find();
    res.json(users);
  };

  module.exports.remove = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ id: req.params.id });
  };
  
  module.exports.update = async (req, res) => {
    const user= await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
  
    res.json(hero);
  };
  
  module.exports.view = async (req, res) => {
    const user = await User.findById(req.params.id);
  
    res.json(user);
  };