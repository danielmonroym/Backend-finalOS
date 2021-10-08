const Shiping = require('../model/shiping');

module.exports.create = async (req, res) => {
  Shiping.create({
      product:{
        name: req.body.productName,
        id: req.body.id,
      },
      buyer:{
        addres:req.body.addres,
        phone:req.body.phone,
        email:req.body.email
      },
  }, (err, shiping) => {
      if (err) return res.status(500).send("Registration failed")
      res.status(200).json(shiping)
  })


};

module.exports.list = async (req, res) => {
    const shiping = await Shiping.find();
    res.status(200).json(shiping);
  };

  module.exports.remove = async (req, res) => {
    await Shiping.findByIdAndRemove(req.params.id);
    res.status(200).json({ id: req.params.id });
  };
  
  module.exports.update = async (req, res) => {
    const shiping= await Shiping.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
  
    res.status(200).json(shiping);
  };
  
  module.exports.view = async (req, res) => {
    const shiping = await Shiping.findById(req.params.id);
  
    res.json(shiping);
  };