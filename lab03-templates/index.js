const express = require('express');
const hbs = require('hbs'); // <-- NOTE 1

/* 1. SETUP EXPRESS */
let app = express();

// 1B. SETUP VIEW ENGINE
app.set('view engine', 'hbs'); // <-- NOTE 2

// add routes here
app.get('/', function(req,res){
    res.send("<h1>Hello from Express</h1>");
    })

    app.get('/hello/:name', (req,res)=>{
        let name = req.params.name;
        res.send("Hi, " + name);
        })

        app.get('/', function(req, res){
            res.render('index.hbs');
            })

app.listen(3000, ()=>{
    console.log("Server started")
    })