const {Schema, model} = require('mongoose');

const ProductoScheema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    stock: {
        type: Number,
        required: [true, 'Stock es requerido']
    },
    active: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
  
}, {versionKey: false});

module.exports = model('Producto', ProductoScheema);