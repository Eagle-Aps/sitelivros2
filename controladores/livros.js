
const {getTodosLivros, getLivroId, inserirLivro, modificarLivro, deletarLivro} = require("../servicos/livros")

function getLivros(req, res) {
   
    try{
        const livrosAtuais = getTodosLivros()
        res.send(livrosAtuais)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
   
    try{
        const id = req.params.id
        if (id && Number(id)){
            const livroId = getLivroId(id)
            res.send(livroId)
        }else{
            res.status(422)
            res.send("ID inválido!")
        }
    }catch (error){
        res.status(500)
        res.send(error.message)
    }

}

function postLivro(req,res) {
    try{
        const novoLivro = req.body
        if( req.body.nome){
            inserirLivro(novoLivro)
            res.status(201)
            res.send("Livro inserido com sucesso")    
        }else{
            res.status(422)
            res.send("O campo nome é obrigatório!")
        }
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}
function patchLivro(req, res) {
   
    try{
        const id = req.params.id
        if (id && Number(id)){
            const body = req.body
            modificarLivro(body, id)
            res.send("Item modificado com sucesso!")
        }else{
            res.status(422)
            res.send("ID inválido!")
        }
    }catch (error){
        res.status(500)
        res.send(error.message)
    }

}
function deleteLivro(req, res) {
    try{
        const id = req.params.id
        if (id && Number(id)){
            deletarLivro(id)
            res.send("Item deletado com sucesso!")
        }else{
            res.status(422)
            res.send("ID inválido!")       
         }
    }catch{
        res.status(500)
        res.send(error.message)
    }
}
module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}