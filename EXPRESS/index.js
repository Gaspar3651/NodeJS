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
    '/blog',
    function(req, res){
        res.end('Bem vindo ao meu blog');   
    }
);

app.get(
    '/canal/youtube',
    function(req, res){
        res.end('Bem vindo ao meu canal');   
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