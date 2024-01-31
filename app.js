const express = require("express")

const app = express ()

const port = 8000

app.get('/',(req, res) => {
    res.send("Olá Matrix!")
} )

app.listen(port, () => {
    console.log(`Listening ${port}`)
})

