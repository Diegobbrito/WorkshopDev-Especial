//importe do express para configurar o servidor
//npm i express
const express = require("express");
const server = express();


const ideas = [
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nesciunt a, quo voluptatum similique harum blanditiis dolorum in minima optio aliquam reprehenderit sit fugiat enim, perferendis vitae ipsum ullam placeat!",
        url: "rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nesciunt a, quo voluptatum similique harum blanditiis dolorum in minima optio aliquam reprehenderit sit fugiat enim, perferendis vitae ipsum ullam placeat!",
        url: "rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nesciunt a, quo voluptatum similique harum blanditiis dolorum in minima optio aliquam reprehenderit sit fugiat enim, perferendis vitae ipsum ullam placeat!",
        url: "rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        category: "Diversão em familia",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nesciunt a, quo voluptatum similique harum blanditiis dolorum in minima optio aliquam reprehenderit sit fugiat enim, perferendis vitae ipsum ullam placeat!",
        url: "rocketseat.com.br"
    },
]


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
    const reversedIdeas = [ ...ideas ].reverse()

    let lastIdeas=[];
    for (let idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }


    return res.render("index.html", {ideas: lastIdeas});
});

server.get("/ideias", function(req,res){

    const reversedIdeas = [ ...ideas ].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas });
});

//ligar servidor na porta 3000
server.listen(3000);

