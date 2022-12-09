const {Router} = require("express");
const router = Router();
const {
    login,
    validarToken
} = require('../controllers/auth.controller')

router.post('/login', login);

router.post('/token', validarToken);



module.exports = router;
