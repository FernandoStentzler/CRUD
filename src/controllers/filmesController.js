const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

let filmes = [{
    id: 1,
    nome:"Batman",
    ator:"Bruce",
    duracao:2
},
{
    id: 2,
    nome:"Homem-arranha",
    ator:"Robin",
    duracao:1
},
{
    id: 3,
    nome:"Senhor Dos Aneis",
    ator:"Harry",
    duracao:4
},
]


const rotasFilmes = {
    // Criação
    // criacaoDeFilmes: (req,res) =>{
    //     let novoFilme = req.body;
    //     filmes.push(novoFilme);

    //     res.send("Filme Adicionado Com Sucesso");
    // },
    criacaoDeFilmes: (req,res) =>{
        let {nome, ator, email, duracao} = req.body;
        
        let errors = validationResult(req)
        if(errors.isEmpty()){            
        }else{
            console.log(errors.mapped())
            return res.render('filmes', {errors: errors.mapped(), old: req.body});
        }                
        res.send('Filme Adicionado Com Sucesso');
    },

    //Atualização
    atualizarFilmes: (req,res)=>{
        const id = req.params.id;
        const filmeAtualizado = req.body;        

        filmes = filmes.map((filme) =>{ 
            if(filme.id == id) {
                return filmeAtualizado;
            }
            return filme;
        })
        res.send("O Filme com a id " + id + " Foi Atualizado Com Sucesso")      
    },


    //Listagem
    todosFilmes: (req,res)=>{
        res.render('filmes')
    },

    //Listagem Por Id
    filmesPorId: (req,res)=>{
        const id = req.params.id;
        res.send(filmes.find(filmes => filmes.id == id));
    },

    //Deleção
    deletarFilme: (req,res)=>{
        let id = req.params.id;

        filmes = filmes.filter((filme)=> filme.id != id)

        res.send("O Filme com a ID: " + id + " Foi Removido Com Sucesso")
    }


}
module.exports = rotasFilmes;