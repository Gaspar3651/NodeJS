const express = require('express');
const app = express();

// USANDO EJS COMO VIEW ENGINE NO LUGAR DE HTML
app.set('view engine', 'ejs');

app.get(
    '/',
    function (req, res) {
        res.render('index.ejs');
    }
);

app.listen(1212);