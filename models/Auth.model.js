const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds)
};

const comparePassword = async (password, hash) => {
    //password: contrasena que el usuario manda en texto plano
    //hash: contrasena encriptada
    return await bcrypt.compare(password, hash)
    //retorna true o false
}

const generarToken = (data) => {
    return jwt.sign(
        {
            data
        },
        process.env.SECRET_JWT
    )
}

const validarToken = () => {
    return true
}


module.exports = {
    hashPassword,
    comparePassword,
    generarToken,
    validarToken
}