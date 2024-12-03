const express = require('express')
const database = require('./src/config/database')
const routerCliente = require('./src/route/clientes')
const routerFilmes = require('./src/route/filmes')
const app = express()

app.use(express.json())

app.use('/clientes', routerCliente)
app.use('/filmes', routerFilmes)

database.db
    .sync({force: false})
    .then(() => {
        console.info("banco conectado com sucesso")
        app.listen(3000, () => {
            console.info(`Servidor rodando na porta 3000`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou ${e}`)
    })