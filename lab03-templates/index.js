const express = require('express');

/* 1. SETUP EXPRESS */
let app = express();
const hbs = require('hbs'); // <-- NOTE 1

// 1B. SETUP VIEW ENGINE
app.set('view engine', 'hbs'); // <-- NOTE 2

// add routes here

        app.get('/', function(req, res){
            res.render('index.hbs');
            })

app.listen(3000, ()=>{
    console.log("Server started")
    })