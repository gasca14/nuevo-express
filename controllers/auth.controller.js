const { request, response } = require('express');
const Usuario = require('../models/Usuario.model');
const authModel = require('../models/Auth.model')

const login = async (req = request, res = response) => {
    const { correo, password } = req.body;
    const userInformation = await Usuario.findOne({ email: correo });
    const validPassword = await authModel.comparePassword(password, userInformation.password)

    if (validPassword === true) {
        const token = authModel.generarToken(
            {
                id: userInformation._id,
                nombre_completo: `${userInformation.nombre} ${userInformation.apellido}`,
                correo: userInformation.email,
                edad: userInformation.edad
            }
        )
        res.status(200).json({
            msg: "Entro login",
            is_valid: validPassword,
            data: token
        })
    } else {
        res.status(401).json({
            msg:"Error, contraseña incorrecta",
            is_valid:validPassword
        })
    }

}

const validarToken =  async (req = request, res = response) => {
    const {token} = req.body;
    res.status(200).json({
        msg: "Respuesta JWT",
        data: authModel.validarToken(token)
    })
}

module.exports = {
    login,
    validarToken
}