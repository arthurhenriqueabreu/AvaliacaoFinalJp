const database = require('../config/database')

class clients {
    constructor(){
        this.model = database.db.define("filmes",{
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            classificacaoIndicativa: {
                type: database.db.Sequelize.STRING,
            },
            diretor: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        })
    }
}
module.exports = new clients().model