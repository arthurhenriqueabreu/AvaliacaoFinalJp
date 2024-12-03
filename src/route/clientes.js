const express = require('express')
const ControllerClientes = require('../controller/clientes')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/create', ControllerClientes.createCliente)
router.post('/login', ControllerClientes.login)

router.get('/session', auth, ControllerClientes.pegarSessionCliente)
router.get('/', auth, ControllerClientes.pegarClientes)
router.put('/:id', auth, ControllerClientes.updateClientes)
router.delete('/:id', auth, ControllerClientes.deleteCliente)

module.exports = router