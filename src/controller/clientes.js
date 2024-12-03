const ServiceClientes = require('../service/clientes')

class controllerclientes {
    async pegarSessionCliente(req, res) {
        try {
            const id = req.session.id
            const cliente = await ServiceClientes.GetClienteById(id)
            res.status(200).json({msg: cliente})
        } catch (error) {
            res.status(500).Json({msg: error.message}) 
        }
    }
    async pegarClientes(req, res) {
        try {
            const clientes = await ServiceClientes.pegarCliente()
            res.status(200).json({msg: clientes})
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async createCliente(req, res) {
        try {
            const { name, email, password } = req.body
            const cliente = await ServiceClientes.createCliente(name, email, password)
            res.status(200).json({msg: cliente})
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async updateClientes(req, res) {
        try {
            const id = req.params.id
            const {name, email, password} = req.body
            const cliente = await ServiceClientes.updateCliente(id, name, email, password)
            res.status(200).json({msg: cliente})
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async deleteCliente(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceClientes.deleteCliente(id)
            res.status(200).json({msg: cliente })
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body
            const token = await ServiceClientes.login(email, password)
            res.status(200).json({ token })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }
}
module.exports = new controllerclientes()