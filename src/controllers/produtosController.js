const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

let produtosJson = path.join('produtos.json')

let produtosController = {
    cadastroProduto:(req,res)=>{
        res.render('produtos')
    },

    formProduto:(req,res)=>{
        let {vendedor, produto, preco} = req.body;

        let errors = validationResult(req)
        if(errors.isEmpty()){            
        }else{
            console.log(errors.mapped())
            return res.render('produtos', {errors: errors.mapped(), old: req.body});
        }


        let dado = JSON.stringify({vendedor, produto, preco})


        fs.appendFileSync(produtosJson, dado)
        res.send('Produto Cadastrado Com Sucesso')
    }

}

module.exports = produtosController