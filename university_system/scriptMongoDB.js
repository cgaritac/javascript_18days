//configurar con expressjs el servidor de la app
const express = require('express');
const app = express();

//configurar el puerto de escucha
app.set("port", 3000);
app.listen(3000);


//Llamar al objeto MongoClient del componente mongodb
const {MongoClient} = require('mongodb').MongoClient;

//Funcion asincrona para hacer las peticiones al servidor
async function usar() {
    //Crear nueva instancia de MongoClient
    const client = new MongoClient('mongodb://127.0.01:27017/mibase');

    //Nos conectamos y hacemos nuestras peticiones
    try{
        const conexión = await client.connect();
        const controlador = conexión.db().collection('cliente');

        let respuesta, filas, filtro;

        //Insertar un nuevo registro
        const nuevoCliente = {nombre: "Carlos Garita", genero: 0, telefono: 155155, domicilio: "Av. Siempreviva 4269"};
        respuesta = await controlador.insertOne(nuevoCliente);
        console.log(`Se ha insertado el cliente con id: ${respuesta}`);  

        //Realizar una consulta
        filas = await controlador.find().toArray();
        console.log("Clientes:", filas);

        //Realizar modificaciones
        const cambiandoCliente = { $set: {genero: 1, telefono: 166166}};
        filtro = {nombre: "Carlos Garita"};
        respuesta = await controlador.updateOne(filtro, cambiandoCliente);
        console.log(`Se ha modificado ${respuesta} clientes.`);

        //Realizar eliminaciones
        filtro = {nombre: "Carlos Garita"};
        respuesta = await controlador.deleteOne(filtro);
        console.log(`Se ha eliminado ${respuesta} clientes.`);
    }catch (error){
        console.log(error);
    }
    
    //Cerrar la conexión
    await client.close();
}