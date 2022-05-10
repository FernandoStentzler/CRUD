let indexController = {
    getHome: (req,res) =>{
        let nome = req.query.nome;
        let idade = req.query.idade;
        res.render('home', {nomeUsuario:nome, idadeUsuario:idade});
    },
    confirmarContato:(req,res)=>{
        let nome = req.query.nome;
        let email = req.query.email;
        res.send('Recebido Com Sucesso as informações do: ' + nome + ' Email: ' + email);
    
    }
}

module.exports = indexController