const { Router } = require("express");
const router = Router();
// const chkToken = require('../middlewares/auth.middleware')
const {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
} = require('../controllers/productos.controller')



router.get('/productos', productosGet)
router.post('/productos', productosPost)
router.put('/productos/:id', productosPut)
router.delete('/productos/:id', productosDelete)
//uso de rutas protegidas implementando el uso de middleware chToken

module.exports = router;