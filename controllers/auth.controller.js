const { request, response} = require('express');
const Usuario = require('../models/Usuario.model');

const login = async (req = request, res = response) => {
    const {correo,password} = req.body;
    const userInformation = await Usuario.findOne({email: correo});
    res.status(200).json({
        msg:"Entro login",
        informacion_usuario: userInformation
    })
}

module.exports = {
    login
}