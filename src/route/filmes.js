const express = require('express')
const ControllerFilmes = require('../controller/filmes')
const ControllerFilmesLocados = require('../controller/filmes-locados')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', auth, ControllerFilmes.pegarFilmes)
router.post('/create', auth, ControllerFilmes.createFilme)
router.put('/:id', auth, ControllerFilmes.updateFilme)
router.delete('/:id', auth, ControllerFilmes.deleteFilme)

router.post('/locar', auth, ControllerFilmesLocados.createFilmeLocado)
router.put('/devolver/:id', auth, ControllerFilmesLocados.updateFilmeLocado)
router.get('/locados', auth, ControllerFilmesLocados.pegarFilmesLocados)

module.exports = router