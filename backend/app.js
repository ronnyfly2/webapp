'use strict'

var express= require('express');
var bodyParser= require('body-parser');

var app = express();

// cargar las rutas
var userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Rutas Base
//-console.log(userRoutes.stack[0].handle);
app.use('/api', userRoutes);


module.exports = app;