const User = require('../model/User');

module.exports.create = async (req, res) => {

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) return res.status(500).send("Registration failed")



        res.status(200).json(user)
    })


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
    const user= await Hero.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
  
    res.json(hero);
  };
  
  module.exports.view = async (req, res) => {
    const user = await User.findById(req.params.id);
  
    res.json(user);
  };