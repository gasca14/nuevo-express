const { response, request } = require("express");
const Producto = require('../models/Producto.model')

const productosGet = async (req = request, res = response) => {
    try {
        const id = req.query.id;
        let productos = null;
        if (id) {
            productos = await Producto.findById(id);
        } else {
            productos = await Producto.find();
        }

        res.status(200).json({
            msg: 'Productos',
            data: productos
        })
    } catch (error) {
        res.status(400).json({
            msg: 'error',
            data: error.message
        });
    }
    
}

const productosPost = async (req = request, res = response) => {
    try {
        const body = req.body
        let producto = new Producto(body)
        await producto.save()
        res.status(200).json({
            msg: 'Producto agregado',
            // post: body,
            producto: producto
        });
    } catch (error) {
        res.status(400).json({
            msg: "se detecto un error",
            detalle: error.message
        })
    }

}

const productosPut = async (req = request, res = response) => {
    const { id } = req.params;
    const body = req.body;
    const producto = await Producto.findByIdAndUpdate(id, body)
    res.status(200).json({
        msg: 'Producto actualizado',
        producto,
        body
    });
}

const productosDelete = async (req = request, res = response) => {
    const { id } = req.params;
    const producto = await Producto.findByIdAndDelete(id)
    res.status(200).json({
        msg: 'El producto fue eliminado',
        producto
    });
}


module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}