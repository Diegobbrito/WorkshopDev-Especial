//importe do express para configurar o servidor
//npm i express
const express = require("express");
const server = express();

//configurando arquivos estaticos( CSS, scripts, imagens)
server.use(express.static("public"));

//configuração do nunjucks
// instalação npm i nunjucks

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
});

//capturando pedido e respondendo 
server.get("/", function(req,res){
    return res.render("index.html");
})

server.get("/ideias", function(req,res){
    return res.render("ideias.html");
});

//ligar servidor na porta 3000
server.listen(3000);

