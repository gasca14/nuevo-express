const bcrypt = require('bcrypt')

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

module.exports = {
    hashPassword,
    comparePassword
}