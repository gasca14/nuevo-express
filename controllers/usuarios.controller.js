const { response, request } = require("express");
const Usuario = require('../models/Usuario.model')

const usuariosGet = async (req = request, res = response) => {

    try {
        const usuarios = await Usuario.find()
        res.status(200).json({
            msg: 'Usuarios obtenidos de la base de datos',
            detalle: usuarios
        })
    } catch (error) {
        res.status(400).json({
            msg: 'se detecto un error',
            detalle: error.message
        })
    }
}

const usuariosPost = async (req = request, res = response) => {
    try {
        const body = req.body
        const usuario = new Usuario(body)
        await usuario.save()
        res.status(200).json({
            msg: 'Usuario agregado',
            post: body,
            usuario: usuario
        });
    } catch (error) {
        res.status(400).json({
            msg: "se detecto un error",
            detalle: error.message
        })
    }

}

const usuariosPut = async (req = request, res = response) => {
    const { id } = req.params;
    const body = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, body)
    // console.log(req.body);
    res.status(200).json({
        msg: 'Usuario actualizado',
        usuario
    });
}

const usuariosDelete = async (req = request, res = response) => {
    const { id } = req.params;
    const usuario =  await Usuario.findByIdAndDelete(id)
    res.status(200).json({
        msg: 'El usuario fue eliminado',
        usuario
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}