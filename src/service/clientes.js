const { Error } = require('sequelize')
const ModelClientes = require('../model/clientes')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT = 10

class clienteservices {
    async pegarClienteById(id) {
        return ModelClientes.findByPk(id)
    }
    async pegarCliente() {
        return ModelClientes.findAll()
    }
    async createCliente(name, email, password) {
        if (!name || !email || !password) {
            throw new Error("insira os dados que falta")
        }
        const hashSenha = await bcrypt.hash(password, SALT)
        return ModelClientes.create({name, email, password: hashSenha})
    }
    async updateCliente(id, name, email, password ) {
        const cliente = await ModelClientes.findByPk(id)
        if (!cliente){
            throw new Error("o cliente nao foi encontrado")
        }
        cliente.name = name || cliente.name
        cliente.email = email || cliente.email
        cliente.password = password 
            ? await bcrypt.hash(password, SALT)
            : cliente.password

        cliente.save()
        return cliente
    }
    async deleteCliente(id) {
        if (!id) {
            throw new Error("insira o id")
        }
        const cliente = await ModelClientes.findByPk(id)
        if (!cliente){
            throw new Error("o cliente nao foi enconyrado")
        }
        return cliente.destroy()
    }
    async login(email, password) {
        if(!email || !password) {
            throw new Error("Email ou password invalido")
        }
        const cliente = await ModelClientes.findOne({ where: { email } })

        if(!cliente) {
            throw new Error("Email ou password invalido")
        }
        const senhaValida = await bcrypt.compare(password, cliente.password)

        if(!senhaValida) {
            throw new Error("Email ou password invalido")
        }
        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60 * 60 })
    }
}
module.exports = new clienteservices()