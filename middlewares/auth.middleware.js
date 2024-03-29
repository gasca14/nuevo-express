const authModel = require('../models/Auth.model')

const chkToken = async (req, res, next) => {
    try {
        const headers = req.headers;
        if (headers.authorization && headers.authorization.split(' ')[0] === 'Bearer') {
            
            const token = headers.authorization.split(' ')[1];
            if (authModel.validarToken(token)) {
                next();
            }
        } else {
            res.status(401).json({
                msg: 'No hay token Bearer'
            })    
        }
    } catch (error) {
        res.status(401).json({
            msg: error.message
        })
    }
}

module.exports = chkToken;