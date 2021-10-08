
const axios = require('axios');

module.exports.create = async (req, res) => {
    const response = await axios.post('http://shiping:4000/api/shiping', req.body);
  
    res.json(response.data);
  };
  
  module.exports.list = async (req, res) => {
    const response = await axios.get('http://shiping:4000/api/shiping');
  
    res.json(response.data);
  };
  
  module.exports.remove = async (req, res) => {
    const { id } = req.params;
  
    const response = await axios.delete(`http://shiping:4000/api/shiping/${id}`);
  
    res.json(response.data);
  };
  
  module.exports.update = async (req, res) => {
    const { id } = req.params;
  
    const response = await axios.put(`http://shiping:4000/api/shiping}/${id}`, req.body);
  
    res.json(response.data);
  };
  
  module.exports.view = async (req, res) => {
    const { id } = req.params;
  
    const response = await axios.get(`http://shiping:4000/api/shiping/${id}`);
  
    res.json(response.data);
  };