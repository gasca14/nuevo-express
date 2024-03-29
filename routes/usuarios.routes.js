const { Router } = require("express");
const router = Router();
const chkToken = require('../middlewares/auth.middleware')
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosGetProfile
} = require('../controllers/usuarios.controller')



router.get('/usuarios', chkToken, usuariosGet)
router.post('/usuarios', usuariosPost)
router.put('/usuarios/:id', chkToken, usuariosPut)
router.delete('/usuarios/:id', chkToken, usuariosDelete)
router.get('/usuarios/perfil', chkToken, usuariosGetProfile);
//uso de rutas protegidas implementando el uso de middleware chToken

module.exports = router;