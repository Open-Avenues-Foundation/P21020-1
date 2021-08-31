const Sequelize = require('sequelize')

module.exports = new Sequelize('privy', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});