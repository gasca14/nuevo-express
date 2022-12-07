const { request, response} = require('express');
const Usuario = require('../models/Usuario.model');
const authModel = require('../models/Auth.model')

const login = async (req = request, res = response) => {
    const {correo,password} = req.body;
    const userInformation = await Usuario.findOne({email: correo});
    const validPassword = await authModel.comparePassword(password, userInformation.password)

    res.status(200).json({
        msg:"Entro login",
        is_valid:validPassword
    })
}

module.exports = {
    login
}