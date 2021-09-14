const Sequelize = require('sequelize')
const allConfigs = require('./sequelize')

const enviroment = process.env.NODE_ENV || 'development'
const { database, username, password, dialect, host } = allConfigs[enviroment]

module.exports = new Sequelize(database, username, password, {
  host,
  dialect,
});