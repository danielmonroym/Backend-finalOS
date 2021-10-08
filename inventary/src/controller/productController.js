const Product = require('../model/product')
const Factura = require('../model/factura')

const crearProducto = async (req, res) => {
    const {titulo, isbn, generos, editorial, autor,
    fechaPublicacion, descripcion, cantidad,precio} = req.body
    const product = await Product.create({
        titulo: titulo, 
        isbn: isbn,
        generos: generos,
        editorial: editorial,
        autor: autor,
        precio: precio,
        cantidad: cantidad,
        estado: 'disponible',
        fechaPublicacion: fechaPublicacion,
        descripcion: descripcion,
        puntuacion: 0,
        comentarios: []
    }).catch(err => {
       return res.status(500).send(err)
    })
    return res.json(product)
}

const eliminarProducto = async (req, res) => {
    const {producId} = req.params
    await Product.findByIdAndDelete(producId)
    .catch(err => {
        return res.status(500).send(err)
    })
    return res.json(`Producto con el id ${productId} eliminado con exito`)
}

const actualizarProducto = async (req, res) => {
    const {producId} = req.params
    const {titulo, isbn, generos, editorial, autor, estado,
        fechaPublicacion, descripcion, precio, comentarios, puntuacion, cantidad} = req.body

    const product = await Product.findByIdAndUpdate({_id: producId},
         {
            titulo: titulo,
            isbn: isbn,
            generos: generos,
            editorial: editorial,
            cantidad: cantidad,
            autor: autor,
            precio: precio,
            estado: estado,
            fechaPublicacion: fechaPublicacion,
            descripcion: descripcion,
            comentarios: comentarios,
            puntuacion: puntuacion  
         })
            .catch(err => {
                return res.status(500).send(err)
            })
    return res.json(product)
}

const obtenerProductos = async (req, res) => {
    const productos = await Product.find()
    .catch(err => { return res.status(500).send(err)})
    return res.json(productos)
}

const obtenerProductoPorId = async (req, res) => {
    const {producId} = req.params
    const product = await Product.findById(producId)
    .catch(err => {
        return res.status(500).send(err)
    })
    return res.json(product)
}

const buscarProductosPorNombre = async (req, res) => {
    const {nombre} = req.params
    const nameRegx = new RegExp(nombre)
    const productos = await Product.find({titulo: { $regex: nameRegx, $options: 'i' }})
    .catch(err => { return res.status(500).send(err)})
    return res.json(productos)
}

const buscarProductosPorGeneros = async (req, res) =>{
    const {genero} = req.params
    const generoRegx = new RegExp(genero)
    const productos = await Product.find({generos: { $regex: generoRegx, $options: 'i' }})
    .catch(err => { return res.status(500).send(err)})
    return res.json(productos)
}
 
const devolucionDeProducto = async (req, res) => {
      const {producId} = req.params
      const producto = await Product.findById(producId)
      await Product.findOneAndUpdate({_id: producId}, {cantidad: producto.cantidad + 1})
        .catch(err => { return res.status(500).send(err)})
      return res.json(`Producto devuelto con exito`)
}

const puntuarProducto = async (req, res) => {
    const {puntuacionUsuario,producId, idUsuario} = req.body
    const libro = await Product.findById(producId)
    let puntiaciones = libro.puntuacion
    puntuaciones.push({puntuacionUsuario: puntuacionUsuario, idUsuario: idUsuario})
    await Product.findOneAndUpdate({_id: producId}, {puntuacion: puntiaciones})
    .catch(err => { return res.status(500).send(err)})
    return res.json(`Puntuacion de ${puntuacionUsuario} añadida con exito`)
}

const comentarProducto = async (req, res) => {
    const {comentario, userId, producId} = req.body
    const libro = await Product.findById(producId)
    let comentarios = libro.comentarios
    comentarios.push({comentario: comentario, userId: userId})
    await Product.findOneAndUpdate({_id: producId}, {comentarios: comentarios})
    .catch(err => { return res.status(500).send(err)})
    return res.json(`Comentario de ${userId} añadido con exito : ` + comentario)
}

const comprarProducto = async (req, res) => {
    const {producsId, userId} = req.body
    let totalValor = 0
    for (element of producsId) {
        const libro = await Product.findById(element)
        if(libro.cantidad > 0){
            await Product.findOneAndUpdate({_id: producId}, {cantidad: libro.cantidad - 1})
            .catch(err => { return res.status(500).send(err)})
            totalValor = totalValor + libro.precio
        }else {
            await Product.findOneAndUpdate({_id: producId}, {estado: 'sin stock'})
            return res.json({
                message: `Producto sin stock, trabajaremos para resolverlo pronto`
            })
        }
    }

    await Factura.create({ccUsuario: userId, productos: producsId, total: totalValor, estado: 'Facturado'})

    return res.json({
        message: `Productos comprado con exito`,
        userId: userId,
        productId: producId,
        products: products,
        total: totalValor
    })
}


module.exports = { crearProducto, puntuarProducto, comentarProducto,
    comprarProducto, eliminarProducto, actualizarProducto, obtenerProductos, obtenerProductoPorId,
    buscarProductosPorNombre, buscarProductosPorGeneros, devolucionDeProducto }
