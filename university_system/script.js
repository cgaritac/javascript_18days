//configurar con expressjs el servidor de la app
const express = require('express');
const app = express();

//configurar el puerto de escucha
app.set("port", 3000);
app.listen(3000);

//Llamar al componente de mysql

let mysql = require('mysql');

//Establecer los parámetros de la conexión
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mibasenueva'
});

//Nos conectamos con la basede datos
connection.connect();

//Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES (1, "Federico", 1, 155155, "Av. Siempreviva 4269")', function (error, results) {
    if (error) throw error;
    console.log('Registro insertado con éxito', results);
});

//Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function (error, results) {
    if (error) throw error;
    console.log('Consulta a la tabla cliente', results);
});

//Realizar modificaciones a la tabla
connection.query('UPDATE cliente SET genero = 0, telefono = 166166 WHERE identificador = 1 ', function (error, results) {
    if (error) throw error;
    console.log('Registro modificado con éxito', results);
});

//Realizar eliminaciones a la tabla
connection.query('DELETE FROM cliente WHERE identificador = 1', function (error, results) {
    if (error) throw error;
    console.log('Registro eliminado con éxito', results);
});

//Cerramos la conexion
connection.end();