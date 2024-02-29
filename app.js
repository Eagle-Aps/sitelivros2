const express = require("express")
const rotaLivro = require("./rotas/livros")
const app = express()
app.use(express.json())
const port = 8000

app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Listening ${port}`)
})

