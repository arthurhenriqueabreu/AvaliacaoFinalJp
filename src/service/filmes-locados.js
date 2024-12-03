
const ModelFilmesLocados = require('../model/filmes-locados')

class ServicesFilmeLocados {
    async pegarFilmesLocados() {
        return ModelFilmesLocados.findAll()
    }
    async createFilmeLocados(idFilme, idCliente) {
        if (!idFilme || !idCliente) {
            throw new Error("id de filme ou clientes esta faltando insira os dados")
        }
        const dataLocacao = new Date()
        return ModelFilmesLocados.create({ idFilme, idCliente, dataLocacao })
    }
    async updateFilmeLocados(id) {
        const filmeLocado = await ModelFilmesLocados.findByPk(id)
        if (!filmeLocado) {
            throw new Error("insira o id do filme locado")
        }
        const dataDevolucao = new Date()

        filmeLocado.dataDevolucao = dataDevolucao
        filmeLocado.save()
        return filmeLocado
    }
}
module.exports = new ServicesFilmeLocados()