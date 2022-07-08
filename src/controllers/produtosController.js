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
        let dado = JSON.stringify([{vendedor:vendedor, produto:produto, preco:preco}])
        fs.appendFileSync(produtosJson, dado)
        res.send('Produto Cadastro Com Sucesso')
    },

    listarProdutos:(req,res)=>{
        let produtos = fs.readFileSync(produtosJson, {encoding:'utf-8'})
        produtos = JSON.parse(produtos)

        res.render('listaProdutos', {listaProdutos:produtos, user:req.session.user})
    }
}

module.exports = produtosController