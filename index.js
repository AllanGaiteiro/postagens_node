////Chamando modulos
const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const app = express();



//Config
    //Template Engine
        app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
        app.engine('handlebars', expressHandlebars({
            handlebars: allowInsecurePrototypeAccess(Handlebars)
        }));
        app.set('view engine', 'handlebars');
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    
// Rotas
    app.get("/", function(req,res){
        Post.findAll().then(function(posts){
            res.render('home', {posts : posts})
        }).catch(function(erro){
            res.send("erro: " + erro)
        })
    });
    app.get('/del/:id', function(req,res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.sendDate('postagem deletada com sucesso')
            }).catch(function(erro){
            res.render('erro:' + erro)
        })
    });
    
    app.get("/cad", function(req,res){
        res.render("formularios")
    });
    app.post("/add", function(req,res){
        Post.create({
            titulo: req.body.titulo,
            post: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('erro: '+ erro)
        })
    })
    /*
    app.get("/", function(req,res){
        res.sendFile()
    })
    */



////Criando Servidor local
app.listen(1012, function(){
    console.log("status: funcionado | host: http://localhost:1012");
})