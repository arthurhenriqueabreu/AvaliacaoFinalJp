const { Error } = require('sequelize')
const ModelFilmes = require('../model/filmes')

class filmesservices {
    async pegarFilmes() {
        return ModelFilmes.findAll()
    }
    async createFilmes(titulo, classificacaoIndicativa, diretor) {
        if (!titulo || !classificacaoIndicativa || !diretor) {
            throw new Error("Coloque todos os dados")
        }
        return ModelFilmes.create({titulo, classificacaoIndicativa, diretor})
    }
    async updateFilmes(id, titulo, classificacaoIndicativa, diretor ) {
        const filme = await ModelFilmes.findByPk(id)
        if (!filme){
            throw new Error("filme nao encontrado")
        }
        filme.titulo = titulo || filme.titulo
        filme.classificacaoIndicativa = classificacaoIndicativa || filme.classificacaoIndicativa
        filme.diretor = diretor
        filme.save()
        return filme
    }
    async deleteFilmes(id) {
        if (!id) {
            throw new Error("coloque o id")
        }
        const filme = await ModelFilmes.findByPk(id)
        if (!filme){
            throw new Error("filme nao encontrado")
        }
        return filme.destroy()
    }
}
module.exports = new filmesservices()