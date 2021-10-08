
const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const { crearProducto, puntuarProducto, comentarProducto,
    comprarProducto, eliminarProducto, actualizarProducto, obtenerProductos, obtenerProductoPorId,
    buscarProductosPorNombre, buscarProductosPorGeneros, devolucionDeProducto} = require('./inventary.service');

    router
  .route('/product')
  .get(catchErrors(obtenerProductos))
  .post(catchErrors(crearProducto))

  router
    .route('/:producId')
    .get(catchErrors(obtenerProductoPorId))
    .put(catchErrors(actualizarProducto))
    .delete(catchErrors(eliminarProducto))
    .patch(catchErrors(devolucionDeProducto))
  
 router
    .route('/name/:nombre')
    .get(catchErrors(buscarProductosPorNombre))
    
 router
 .route('/genero/:genero')
 .get(catchErrors(buscarProductosPorGeneros))

 
 router
 .route('/puntuar')
 .post(catchErrors(puntuarProducto))

 router
 .route('/comentar')
 .post(catchErrors(comentarProducto))

 
 router
 .route('/comprar')
 .post(catchErrors(comprarProducto))



    module.exports = router;