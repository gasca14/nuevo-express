console.log("juan");

const express = require("express")
const cors = require("cors")

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

app.get('/test', (req, res) => {
    // GET - http://localhost:3000/test
    res.status(200).json({
        msg: 'GET API - controlador'
    })
});

app.post('/test', (req, res) => {
    // POST - http://localhost:3000/test
    res.status(200).json({
        msg: 'POST API - controlador'
    });
});

app.put('/test/:id', (req, res) => {
    // PUT - http://localhost:3000/test/10
    const { id } = req.params;
    const body = req.body;
    console.log(req.body);
    res.status(200).json({
        msg: 'PUT API - controlador',
        id: id,
        body: body
    });
});

app.delete('/test/:id', (req, res) => {
    // DELETE - http://localhost:3000/test/10
    const { id } = req.params;
    res.status(200).json({
        msg: 'DELETE API - controlador',
        id
    });
});

app.listen(port, () => console.log(`La aplicacion esta corriendo en el puerto ${port}!`));
