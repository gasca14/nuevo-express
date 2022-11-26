console.log("juan");

const express = require("express")
const cors = require("cors")
const rutasUsuarios = require('./routes/usuarios.routes')
const {dbConnection} = require('./database/config')

require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT

// pagina de inicio.
app.get("/", function (req, res) {
    // GET - http://localhost:3000
    res.send("API v1.0");
});

(async()=>{
    //funcion que se ejecuta al entrar el archivo index.js
    await dbConnection()
    const rutaBase = '/api/v1'
    app.use(rutaBase, rutasUsuarios)
})();

app.listen(port, () => console.log(`La aplicacion esta corriendo en el puerto ${port}!`));
