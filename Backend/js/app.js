"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mysql = require("mysql");
const app = express();
//cors
const cors = require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.listen(3000, () => {
    console.log(`Conectando al servidor http://localhost: ${3000}`);
});
app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'admacademico'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida ' + connection.threadId);
});
app.post("", jsonParser, (req, res) => {
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let email = req.body.email;
    let contrasenia = req.body.contraseña;
    let recontrasenia = req.body.recontraseña;
    //console.log(email);
    connection.query("INSERT INTO usuarios (nombres,apellidos,email,contraseña,recontraseña) VALUES(?,?,?,?,?)", [nombres, apellidos, email, contrasenia, recontrasenia], function (error, results, fields) {
        //console.log(JSON.stringify({ "mensaje": true, "resultado": results }));
        if (error) {
            console.error(error);
        }
        res.send('{Usuario ingresado}');
    });
});
app.post("/registrarse", jsonParser, (req, res) => {
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let email = req.body.email;
    let contrasenia = req.body.contraseña;
    let recontrasenia = req.body.recontraseña;
    //console.log(req.body);
    connection.query("INSERT INTO usuarios (nombres,apellidos,email,contraseña,recontraseña) VALUES(?,?,?,?,?)", [nombres, apellidos, email, contrasenia, recontrasenia], function (error, results, fields) {
        //console.log(JSON.stringify({ "mensaje": true, "resultado": results }));
        if (error) {
            console.error(error);
        }
        res.json('Usuario ingresado');
    });
});
app.get("", (req, res) => {
    connection.query("select * from usuarios", function (error, results, fields) {
        res.send(results);
    });
});
/* app.put('/products/:id', (req, res) => {

  const newdata = req.body
  const idbuscado = parseInt(req.params.id)

  const pfind = products.find(function (producto) {
    if (producto.id == idbuscado) {
      return producto
    }
  })


  if (!pfind) return res.status(404).json({
    message: "product not found"
  })

  const newProducts = products.map(function (e) {

    if (e.id == idbuscado) {
      return { ...e, ...newdata }

    } else {
      //console.log('mismo elemento')
      return e
    }
  })
  products = newProducts
  res.send('actualizando products')
})

app.delete('/products/:id', (req, res) => {
  const idbuscado = parseInt(req.params.id)

  const pfind = products.find(function (producto) {
    if (producto.id == idbuscado) {
      return producto
    }
  })


  if (!pfind) return res.status(404).json({
    message: "product not found"
  })

  const newProducts = products.filter(function (e) {
    return e.id !== idbuscado
    console.log(newProducts)
  })

  products = newProducts
  res.send('eliminado')
}) */ 
