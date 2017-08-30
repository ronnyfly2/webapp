'use strict'

var express= require('express');
var bodyParser= require('body-parser');

var app = express();

// cargar las rutas

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/test', function(req, res){
    res.status(200).send({mesage:"hola"});
});

module.exports = app;