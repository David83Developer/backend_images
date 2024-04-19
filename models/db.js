const Sequelize = require('sequelize')

require('dotenv').config()

const dataBase = process.env.DB
const user = process.env.USER_DB
const password = process.env.PASSWORD_DB
const host = process.env.HOST

const sequelize = new Sequelize("u395127032_imagens", "u395127032_userDavid", "Ifscbasquete83",{
    host: "193.203.175.79",
    dialect: 'mysql'
}) 

sequelize.authenticate()
.then(()=> console.log('conectado ao banco de dados'))

module.exports = sequelize;