// configurando o servidor
const express = require("express")
const server = express()

// configurar o servidor para aprensentar arquivos extras
server.use(express.static('public'))

//habilitar body do formulario
server.use(express.urlencoded({ extended:true }))

// configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache:true, // booblean ou booleano aceita 2 vaores, verdadeiro ou falso
})

// lista de doadores: Vetor ou Arry

const donors = [
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
    return res.render("index.html", { donors })
})

server.post("/", function(req,res) {
    //pegar dados do formulario 
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    // coloco valores dentro do array
    donors.push({
        name:name,
        blood:blood,
    })

    return res.redirect("/")
})

// ligar o servidor e permitir o acesso na porta 4000
server.listen(4000, function() {
    console.log("inicei o servidor")
})
