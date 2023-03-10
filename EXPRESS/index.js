const express = require('express'); // IMPORTANDO O EXPRESS
const app = express(); // INICIANDO O EXPRESS

// CRIANDO UMA ROTA
app.get(
    '/',
    function(req, res){
        res.end('BATATINHA');   
    }
);

app.get(
    '/blog/:artigo?',
    function(req, res){
        let parametros = req.params;
        if (parametros.artigo) {
            res.end('Teve artigo');   
        } else {
            res.end('F artigo');   
        }
    }
);
    
app.get(
    '/canal/youtube',
    function(req, res){
        let parametros = req.query['canal'];
        
        if (parametros) {
            res.end('Bem vindo ao meu canal '+ parametros);   
        } else {
            res.end('Nenhum canal fornecido');   
        }

    }
);

app.get(
    '/ola/:nome/:empresa?',
    function(req, res){
        let parametros = req.params;
        res.send('<h1>Oiiiii '+ parametros.nome + '</h1>');   
    }
);

app.listen(
    1515,
    function(erro){
        if (erro) {
            console.log('ERROR');
        } else {
            console.log('Servidor iniciado com sucesso');
        }
    }
);
