const {Router} = require("express")
const {getLivros} = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)

module.exports = router
