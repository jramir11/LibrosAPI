const express = require("express");
const mongoose = require('./server/config/mongoose');
const Autor = require('./server/model/autor');
const router = require('./server/config/servicios');
const cors = require('cors');

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Nueva linea despues de la Modularizacion
require('./server/config/servicios.js')(app)


app.listen(8000, () => {
  console.log("Escuchando en el puerto 8000");
});