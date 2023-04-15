const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    const items = [
        { 
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para rederizar HTML'
        },
        {
            title: 'M',
            message: 'uito fácil de usar'
        },
        {
            title: 'A',
            message: 'morzinho'
        },
        {
            title: 'I',
            message: 'nstall ejs'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        },
    ];

    const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript'
    res.render('pages/index', {
        qualities: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', function(req, res){
    res.render('pages/about');
})

app.listen(8080);
console.log('Servidor funcionando')