'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;


mongoose.connect('mongodb://localhost:27017/delicores', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('se pudo conectar a la base de datos', res);
        app.listen(port, function(){
            console.log('el servidor ta funcando en el puerto:', port);
        })
    }
});