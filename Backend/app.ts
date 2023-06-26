import {encriptar} from "./encriptacion";

const express = require('express');
const mysql=require("mysql");
const app=express();
//cors
const cors=require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

app.listen(3000, () => {
    console.log(`Conectando al servidor http://localhost: ${3000}`)
})



app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port:  3306,
    database : 'admacademico'
  });

  connection.connect(function(err:any) {
    if (err) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
    console.log('Conexión establecida' + connection.threadId);
  });

  app.post("", jsonParser, (req:any, res:any) => {
    let nombres = req.body.nombres
    let apellidos  = req.body.apellidos
    let email = req.body.email;
    let contrasenia = req.body.contraseña;
    let recontrasenia=req.body.recontraseña;
    //console.log(email);
    connection.query("INSERT INTO usuarios (nombres,apellidos,email,contraseña,recontraseña) VALUES(?,?,?,?,?)", [nombres,apellidos,email, contrasenia,recontrasenia], function (error:any,results:any,fields:any) {
        //console.log(JSON.stringify({ "mensaje": true, "resultado": results }));
        if(error){
          console.error(error)
        }
        res.send('Usuario ingresado')
    });
});

app.get("",(req:any,res:any)=>{
    connection.query("select * from usuarios", function (error:any,results:any,fields:any) {
        res.send(results);
    })
})
