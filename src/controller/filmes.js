const ServiceFilmes = require('../service/filmes')

class filmescontroller {
    async pegarFilmes(req, res) {
        try {
            const filmes = await ServiceFilmes.pegarFilmes()
            res.status(200).json({msg: filmes})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async createFilme(req, res) {
        try {
            const { titulo, classificacaoIndicativa, diretor } = req.body
            const filme = await ServiceFilmes.createFilmes(titulo, classificacaoIndicativa, diretor)
            res.status(200).json({msg: filme})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async updateFilme(req, res) {
        try {
            const id = req.params.id
            const { titulo, classificacaoIndicativa, diretor } = req.body
            const filme = await ServiceFilmes.updateFilmes(id, titulo, classificacaoIndicativa, diretor)
            res.status(200).json({msg: filme})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async deleteFilme(req, res) {
        try {
            const id = req.params.id
            const filme = await ServiceFilmes.deleteFilmes(id)
            res.status(200).json({msg: filme })
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}
module.exports = new filmescontroller()