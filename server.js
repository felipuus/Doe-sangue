// configurando o servidor
const express = require("express")
const server = express()

// configurar o servidor para aprensentar arquivos extras
server.use(express.static('public'))

// configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

// lista de doadores: Vetor ou Arry

const dpnors = [
    {
        name:"Diego Fernandes",
        blood:"AB+"
    },
    {
        name:"Cleito Souza",
        blood:"B+"
    },
    {
        name:"Robson Marques",
        blood:"O+"
    },
    {
        name:"Mayk Brito",
        blood:"A-"
    },
]



// configurar a apresentação da página
server.get("/", function(req,res){
    return res.render("index.html", { donors })})

// ligar o servidor e permitir o acesso na porta 4000
server.listen(4000, function() {
    console.log("inicei o servidor")
})
