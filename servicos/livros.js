const fs = require("fs")

function getTodosLivros () {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroId (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroid = livros.filter(livro => livro.id == id)[0]
    return livroid
}
function inserirLivro (novoLivro) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novosLivros = [...livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(novosLivros))
}
function modificarLivro (mudancas, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id)
    const conteudoMudado = {...livrosAtuais[indiceModificado], ...mudancas}
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}
function deletarLivro (id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceDeletado = livrosAtuais.findIndex(livro => livro.id == id)
    livrosAtuais.splice(indiceDeletado, 1)
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}
module.exports = {
    getTodosLivros,
    getLivroId,
    inserirLivro,
    modificarLivro,
    deletarLivro
}