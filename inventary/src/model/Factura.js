const mongoose = require('mongoose');

const facturaSchema= new mongoose.Schema({
    ccUsuario:{
        type: String,
        required: [true, 'Es necesario agregar un titulo']
    },
    fecha:{ 
        type: Date,
        default: Date.now
    },
    total:{
        type: Number,
        required: [true, 'Es necesario agregar un total']
    },
    estado:{
        type: String,
        required: [true, 'Es necesario agregar un estado']
    },
    productos:{ 
        type: Array,
        required: [true, 'Es necesario agregar un producto']
    }
});

module.exports = mongoose.model('factura', facturaSchema);