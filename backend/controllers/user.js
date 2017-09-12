'use strict'

var bCrypt = require('bcrypt-nodejs');
var User = require('../models/user');

function pruebas(req, res){
    res.status(200).send({
        message:'controller usuario'
    })
}

function saveUser(req, res){
    var user = new User();
    var params = req.body;

    console.log(params);

    user.name= params.name;
    user.lastName= params.lastName;
    user.email= params.email;
    user.role = 'ROLE_USER';
    user.image= 'null';

    User.findOne({email: user.email.toLowerCase()}, (err, userRepeat)=>{
        console.log(userRepeat)
        if(!userRepeat){
            if(params.password){
                //encriptar y guardar datos
                bCrypt.hash(params.password, null, null, function(err,hash){
                    user.password = hash;
                    if(user.name != null && user.lastName != null && user.email != null){
                        //guardar usuario en la base de datos
                        user.save((err, userStored)=>{
                            if(err){
                                res.status(500).send({message:'hubo un error al guardar el usuario'});
                            }else{
                                if(!userStored){
                                    res.status(404).send({message:'no se registro el usuario'});
                                }else{
                                    res.status(200).send({user:userStored });
                                }
                            }
                        })
                    }else{
                        res.status(200).send({message:'rellena los campos'});
                    }
                });
            }else{
                res.status(500).send({message:'introduce contraseña'});
            }
        }else{
            res.status(200).send({message:'el correo ya existe'});
        }
    });

    
}



module.exports = {
    pruebas,
    saveUser
}
