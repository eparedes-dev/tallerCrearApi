const databaseConection = require('./dbConection/databaseConection.js');
const QueryDB = require('./dbConection/queryDB.js');
const express = require('express');

const app = express();
const port = 3000;

const db = new databaseConection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'minicorebd'
});

const query = new QueryDB(db);

db.connect();

app.get('/vendedores', (req, res) => {
    query.query('SELECT * FROM vendedores')
      .then(rows => res.send(rows))
      .catch(err => console.error(err));
  });

app.get('/ventas', (req, res) => {
    query.query('SELECT * FROM ventas')
      .then(rows => res.send(rows))
      .catch(err => console.error(err));
  });
  
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
