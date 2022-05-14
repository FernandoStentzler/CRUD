function auth(req,res,next){
    if(typeof(req.session.usuario) != "undefined"){
        return next()
    }else{
        return res.send('Voce precisa estar Logado para ter acesso')
    }
}

module.exports = auth