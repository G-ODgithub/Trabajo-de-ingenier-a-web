import { json } from "stream/consumers";
import { encriptar } from "./encriptacion";

const express = require('express');
const mysql = require("mysql");
const app = express();
//cors
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

app.use((req: any, res: any, next: any) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(3000, () => {
  console.log(`Conectando al servidor http://localhost: ${3000}`)
})

app.use(cors());
app.use(bodyParser.json())

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'admacademico'
});

connection.connect(function (err: any) {
  if (err) {
    console.error('Error conectando a la DB ' + err.stack);
    return;
  }
  console.log('Conexión establecida ' + connection.threadId);
});

app.post("/admin", jsonParser, (req: any, res: any) => {
  let nombres = req.body.nombres
  let apellidos = req.body.apellidos
  let email = req.body.email;
  let contrasenia = req.body.contraseña;
  let recontrasenia = req.body.recontraseña;
  //console.log(email);
  connection.query("INSERT INTO usuarios (nombres,apellidos,email,contraseña,recontraseña) VALUES(?,?,?,?,?)", [nombres, apellidos, email, contrasenia, recontrasenia], function (error: any, results: any, fields: any) {
    //console.log(JSON.stringify({ "mensaje": true, "resultado": results }));
    if (error) {
      console.error(error)
    }
    res.send('{Usuario ingresado}')
  });
});

app.get('/:email', (req:any, res:any) => {
  let email = req.params.email;

  connection.query('SELECT id,contraseña FROM usuarios WHERE email = ?', [email], function (error:any, results:any, fields:any) {
    if (error) {
      console.error('Error al buscar el registro:', error);
      res.status(500).json({ error: 'Error al buscar el registro' });
    } else {
      if (results.length > 0) {
        let id = results[0].id;
        let contraseña= results[0].contraseña;
        res.json({ 
          id: id,
          contraseña: contraseña
        });
      } else {
        res.status(404).json({ mensaje: 'No se encontró ningún registro con el email proporcionado' });
      }
    }
  });
});


app.post("/registrarse", jsonParser, (req: any, res: any) => {
  let nombres = req.body.nombres
  let apellidos = req.body.apellidos
  let email = req.body.email;
  let contrasenia = req.body.contraseña;
  let recontrasenia = req.body.recontraseña;
  //console.log(req.body);
  connection.query("INSERT INTO usuarios (nombres,apellidos,email,contraseña,recontraseña) VALUES(?,?,?,?,?)", [nombres, apellidos, email, contrasenia, recontrasenia], function (error: any, results: any, fields: any) {
    //console.log(JSON.stringify({ "mensaje": true, "resultado": results }));
    if (error) {
      console.error(error)
    }
    res.json('Usuario ingresado')
  });
});

app.get("/admin/usuarios", jsonParser, (req: any, res: any) => {
  connection.query("select * from usuarios", function (error: any, results: any, fields: any) {
    res.send(results);
  })
})

app.get("/admin/:id", jsonParser, (req: any, res: any) => {
  connection.query("SELECT * FROM usuarios WHERE id = ?", [req.params.id], function (error: any, results: any, fields: any) {
    if (error) {
      console.error('Este usuario no existe')
      res.send(error)
    }
    res.json(results);
  })
})


app.put('/admin/:id/:campo', jsonParser, (req: any, res: any) => {
  let campoActualizar = req.params.campo; // Nombre del campo que se va a actualizar
  let nuevoValor = req.body.valor;
  let id = req.params.id;

  connection.query("SELECT * FROM usuarios WHERE id = ?", [id], function (error: any, results: any, fields: any) {
    if (error) {
      console.error('Este usuario no existe')
      res.send(error)
    }
    connection.query(`UPDATE usuarios SET ${campoActualizar} = ? WHERE id = ?`, [nuevoValor, id], function (error: any, results: any, fields: any) {
      if (error) {
        console.error('Error al actualizar el campo:', error);
        res.status(500).json({ error: 'Error al actualizar el campo' });
      } else {
        console.log('Campo actualizado correctamente');
        res.json({ mensaje: 'Campo actualizado correctamente' });
      }
    });
  })
})

app.delete('/admin/:id', jsonParser, (req: any, res: any) => {
  const id = req.params.id
  connection.query("SELECT * FROM usuarios WHERE id = ?", [id], function (error: any, results: any, fields: any) {
    if (error) {
      console.error('Este usuario no existe')
      res.status(404).send(error)
    }
    connection.query('DELETE FROM usuarios WHERE id = ?', [id], function (error: any, results: any, fields: any) {
      if (error) {
        console.error('Error al eliminar usuairo:', error);
        res.status(500).json({ error: 'Error al eliminar usuario' });
      } else {
        console.log('Usuario eliminado correctamente');
        res.json({ mensaje: 'Usuario eliminado correctamente'});
      }
    })

  })
})