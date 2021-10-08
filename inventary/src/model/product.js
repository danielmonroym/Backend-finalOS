const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, 'Es necesario agregar un titulo']
    },
    isbn:{
        type: String,
        required: [true, 'Es necesario agregar un isbn']
    },
    generos:{
        type: [String],
        required: [true, 'Es necesario agregar un genero']
    },
    editorial:{
        type: String,
        required: [true, 'Es necesario agregar una editorial']
    },
    autor:{
        type: String,
        required: [true, 'Es necesario agregar un autor']
    },
    fechaPublicacion:{ 
        type: Date,
        required: [true, 'Es necesario agregar una fecha de publicacion']
    },
    descripcion:{
        type: String,
        required: [true, 'Es necesario agregar una descripcion']
    },
    cantidad:{
        type: Number,
        required: [true, 'Es necesario agregar una cantidad']
    },
    estado:{ 
        type: String,
        required: [true, 'Es necesario agregar un estado']
    },
    puntuacion:{
        type: [Object]
    },
    comentarios:{
        type: [Object]
    }
});

module.exports = mongoose.model('product', productSchema);