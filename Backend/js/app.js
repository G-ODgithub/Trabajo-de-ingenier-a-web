"use strict";
const express = require('express');
const mysql = require("mysql");
const app = express();
//cors
//const cors=require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.listen(3000, () => {
    console.log(`Conectando al servidor http://localhost:${3000}`);
});
//app.use(cors());
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
    console.log('Conexión establecida' + connection.threadId);
});
