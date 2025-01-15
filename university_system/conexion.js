//Configurar la conexión para nuestra base de datos en MongoDB
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017/mibase');

//Desarrollar una función para conectarnos con la base de daots y retornar el objeto que contiene la conexión
const conexionDB = () => {
    return client.connect()
    .then(dbClient => {return dbClient})
    .catch(error => {console.log(error)});
}

//Exportar para otro modulo
module.exports = {conexionDB};