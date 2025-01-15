//Importar el framework express
const express = require('express');
const app = express();

//Obtener el modulo conexion.js
const mongoDB = require('./conexion.js');

//Configurar nuestra API para que trabaje bajo el formato json
app.use(express.json());

//Definir un nuevo metodo get
app.get('/clientes', (pedido, respuesta) => {
    //Obtener listado de clintes
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('clientes');
        controlador.find().toArray().then((filas) => respuesta.send(filas))
                                    .catch((error) => console.log(error));
        })
    })

//Definimos un metodo POST
app.post('/clientes/create', (pedido, respuesta) => {
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('clientes');
        controlador.insertOne(pedido.body).then((respuesta) => respuesta.send(respuesta))
                                    .catch((error) => console.log(error));
        })
    })
    


//Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});