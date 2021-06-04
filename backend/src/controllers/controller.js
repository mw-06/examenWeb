const conexion = require('../config/connection');

//funcion para crear un registro
function crear(req,res){
    if(conexion){
        console.log(req.body);
        const Auto = req.body;
        console.log(typeof Auto.anio);
        if(Auto.anio.length !== 4){
            return res.status(400).send({error: true, mensaje: "El año debe de ser de 4 caracteres"});
        }
        if(!Auto.modelo){
            return res.status(400).send({error: true, mensaje: "El modelo es obligatorio"});
        }
        if(!Auto.marca){
            return res.status(400).send({error: true, mensaje: "La marca es obligatoria"});
        }

        let sql = "INSERT INTO examen_web.autos set ?"

        conexion.query(sql, [Auto], (err,data) => {
            if(err){
                console.log(err);
            }else{
                res.json({error: false, data, mensaje: "Auto añadido con exito!"});
            }
        })
    }
}

//funcion para listar
function listar(req,res){
    if(conexion){
        let sql = "SELECT * FROM examen_web.autos"
        conexion.query(sql, (err,autos) => {
            if(err){
                res.json(err);
            }else{
                console.log(autos);
                res.json(autos);
            }
        });
    }
}

//al final del archivo controller.js exportas tus funciones de la siguiente forma
module.exports = {
    listar,
    crear
}