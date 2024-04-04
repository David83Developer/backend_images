const Sequelize = require('sequelize')

require('dotenv').config()

const dataBase = process.env.DB
const user = process.env.USER_DB
const password = process.env.PASSWORD_DB
const host = process.env.HOST

const sequelize = new Sequelize(dataBase, user, password,{
    host: host,
    dialect: 'mysql'
}) 

sequelize.authenticate()
.then(()=> console.log('conectado ao banco de dados'))

module.exports = sequelize;