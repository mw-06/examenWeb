//codigo del archivo coneection.js
const mysql = require('mysql');

//aqui va la configuracion de tu servidor de mysql
const objectConnection = {
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "root",
    "database": "examen_web"
}

// Crear conexion
const myConn = mysql.createConnection(objectConnection);

// Conectar
myConn.connect((error) => {
    if(error) {
        console.log("Error bd: ", error);
    } else {
        console.log("Base de datos conectada");
    }
});

module.exports = myConn;