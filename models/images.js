const Sequelize = require('sequelize')

const db = require('./db')

const Image = db.define('imagens_tabela',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: Sequelize.STRING,
    }
})

Image.sync()

module.exports = Image;