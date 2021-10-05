
const axios = require('axios');

module.exports.create = async (req, res) => {
    const response = await axios.post('http://users:3000/api/users', req.body);
  
    res.json(response.data);
  };
  
  module.exports.list = async (req, res) => {
    const response = await axios.get('http://users:3000/api/users');
  
    res.json(response.data);
  };
  
  module.exports.remove = async (req, res) => {
    const { id } = req.params;
  
    const response = await axios.delete(`http://users:3000/api/users/${id}`);
  
    res.json(response.data);
  };
  
  module.exports.update = async (req, res) => {
    const { id } = req.params;
  
    const response = await axios.put(`http://users:3000/api/users}/${id}`, req.body);
  
    res.json(response.data);
  };
  
  module.exports.view = async (req, res) => {
    const { id } = req.params;
  
    const response = await axios.get(`http://users:3000/api/users/${id}`);
  
    res.json(response.data);
  };