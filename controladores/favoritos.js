const { todosFavoritos, addFavorito, deleteLivroPorID } = require("../servicos/favoritos")


function getFavoritos(req, res) {
   
    try{
        const livrosFavoritos = todosFavoritos ()
        res.send(livrosFavoritos)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req,res) {
    try{
        const novoFavorito = req.params.id
        addFavorito(id)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try{
        const id = req.params.id
        if (id && Number(id)){
            deleteLivroPorID(id)
            res.send("Esse livro já não está mais entre os seus favoritos!")
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
    getFavoritos,
    postFavorito,
    deleteFavorito
}