const express = require('express');
const app = express();

// USANDO EJS COMO VIEW ENGINE NO LUGAR DE HTML
app.set('view engine', 'ejs');

app.get(
    '/',
    function (req, res) {
        var nome = 'Andri';
        var lang = 'JS';

        res.render(
            'index.ejs', 
            {
                nome, 
                lang
            }
        );
    }
);

app.listen(1212);