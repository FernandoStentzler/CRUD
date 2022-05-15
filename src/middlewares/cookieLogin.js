const { validationResult } = require('express-validator');
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');

const cookieLogin = (rea,res,next) => {
    if(req.cookies.logado != undefined && req.session.usuario == null){
        let email = req.cookies.logado;

        let usuario = JSON.parse(fs.readFileSync(path.join('usuario.json'),{encoding:'utf-8'}))

        usuario.array.forEach(element => {
            if(element.email == usuario.email){
                return req.session.usuario = usuario
            }
            
        });
    }
    next()
}

module.exports = cookieLogin