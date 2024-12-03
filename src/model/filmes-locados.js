const database = require('../config/database')
const clientes = require('../model/clientes')
const filmes = require('../model/filmes')

class filmeslocados {
    constructor(){
        this.model = database.db.define("filmes-locados",{
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idFilme: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: filmes,
                    key: "id"
                }
            },
            idCliente: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: clientes,
                    key: "id"
                }
            },
            dataLocacao: {
                type: database.db.Sequelize.DATE,
                allowNull: false
            },
            dataDevolucao: {
                type: database.db.Sequelize.DATE,
                allowNull: true
            }
        })
        this.model.hasMany(filmes, { foreignKey: 'idFilmes' });
        filmes.belongsTo(this.model, { foreignKey: 'idFilmes' });

        this.model.hasMany(clientes, { foreignKey: 'idClientes' });
        clientes.belongsTo(this.model, { foreignKey: 'idClientes' });
    }
}
module.exports = new filmeslocados().model