const Sequelize = require('sequelize')

require('dotenv').config()

const dataBase = 'imagens'//process.env.DB
const user = 'user2'//process.env.USER_DB
const password = 'Root#123'//process.env.PASSWORD_DB
const host = process.env.HOST

const sequelize = new Sequelize(dataBase, user, password,{
    host: host,
    dialect: 'mysql'
}) 

sequelize.authenticate()
.then(()=> console.log('conectado ao banco de dados'))

module.exports = sequelize;