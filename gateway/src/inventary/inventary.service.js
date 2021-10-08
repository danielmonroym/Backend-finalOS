const axios = require('axios');


const crearProducto = async (req, res) => {
    const response = await axios.post('http://users:4000/api/inventary', req.body);
    res.json(response.data)
}

const eliminarProducto = async (req, res) => {
   const {producId} = req.params.producId;
   const response = await axios.delete(`http://users:4000/api/inventary/${producId}`);
    res.json(response.data)
}

const actualizarProducto = async (req, res) => {
 const {producId} = req.params.producId;
 const response = await axios.put(`http://users:4000/api/inventary/${producId}`, req.body);
    res.json(response.data)
 }

const obtenerProductos = async (req, res) => {
    const response = await axios.get('http://users:4000/api/inventary');
    res.json(response.data)
}

const obtenerProductoPorId = async (req, res) => {
    const {producId} = req.params.producId;
    const response = await axios.get(`http://users:4000/api/inventary/${producId}`);
    res.json(response.data)
}

const buscarProductosPorNombre = async (req, res) => {
  const {nombre} = req.params;
    const response = await axios.get(`http://users:4000/api/inventary/name/${nombre}`);
    res.json(response.data)
}

const buscarProductosPorGeneros = async (req, res) =>{
    const {genero} = req.params;
    const response = await axios.get(`http://users:4000/api/inventary/genero/${genero}`);
    res.json(response.data)
}
 
const devolucionDeProducto = async (req, res) => {
    const {producId} = req.params.producId;
    const response = await axios.patch(`http://users:4000/api/inventary/devolucion/${producId}`);
    res.json(response.data)
}

const puntuarProducto = async (req, res) => {
  const response = await axios.post(`http://users:4000/api/inventary/puntuar`, req.body);
    res.json(response.data)
}

const comentarProducto = async (req, res) => {
    const response = await axios.post(`http://users:4000/api/inventary/comentar`, req.body);
    res.json(response.data)
}
const comprarProducto = async (req, res) => {
  const response = await axios.post(`http://users:4000/api/inventary/comprar`, req.body);
  res.json(response.data)
}


module.exports = { crearProducto, puntuarProducto, comentarProducto,
    comprarProducto, eliminarProducto, actualizarProducto, obtenerProductos, obtenerProductoPorId,
    buscarProductosPorNombre, buscarProductosPorGeneros, devolucionDeProducto}
