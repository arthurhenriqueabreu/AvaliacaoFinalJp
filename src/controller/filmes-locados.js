const ServicesFilmeLocados = require('../service/filmes-locados')

class filmeslocadoscontroller {
    async pegarFilmesLocados( req,res) {
        try {
            const filmes = await ServicesFilmeLocados.pegarFilmesLocados()
            res.json({msg: filmes})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async createFilmeLocado(req, res) {
        try {
            const { idFilmes, idClientes } = req.body
            const filmeLocado = await ServicesFilmeLocados.createFilmeLocados(idFilmes, idClientes)
            res.json({msg: filmeLocado})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async updateFilmeLocado(req, res) {
        try {
            const id = req.params.id
            const filmeLocado = await ServicesFilmeLocados.updateFilmeLocados(id)
            res.json({msg: filmeLocado})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}
module.exports = new filmeslocadoscontroller()