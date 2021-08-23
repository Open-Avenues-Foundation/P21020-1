const Sequelize = require('sequelize')
const customersModel = require('./customers')

const connection = new Sequelize('privy', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const customers = customersModel(connection, Sequelize)

module.exports = { customers }