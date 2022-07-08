const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

let userJson = path.join('user.json')

let userController = {
    registryForm: (req,res)=>{
        res.render('registry')
    },

    saveForm: (req,res)=>{
        let {nome, email, senha} = req.body;
        let criptografada = bcrypt.hashSync(senha, 10)
        let user = JSON.stringify({nome, email, senha:criptografada})
        
        fs.appendFileSync(userJson, user)
        res.send('Usuario Cadastrado Com Sucesso')
    },

    loginForm:(req,res)=>{
        res.render('login')
    },

    logarUser:(req,res)=>{
        let {email, senha, logado} = req.body;
        let userSave = fs.readFileSync(userJson, {encoding:'utf-8'});
        userSave = JSON.parse(userSave);

        if(email != userSave.email){
            return res.send("Email nao Cadastrado")
        }

        if(!bcrypt.compareSync(senha, userSave.senha)){
            return res.send("Senha Invalida")
        }

        req.session.user = userSave

        if(logado != undefined){
            res.cookie('logado', userSave.email, {maxAge:600000})
        }

        res.redirect('/produtos')

    },
}

module.exports = userController