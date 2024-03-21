const fs = require("fs")

function todosFavoritos () {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deleteLivroPorID (id){
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livrosFilter = livros.filter( livro => livro.id != id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFilter))

}

function addFavorito (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const favoritoAdicionado = livros.find( livro => livro.id == id)
    const novosFavoritos = [... favoritos, favoritoAdicionado]

    fs.writeFileSync("favoritos.json", JSON.stringify(novosFavoritos))
}

module.exports = {
    todosFavoritos,
    deleteLivroPorID,
    addFavorito
}