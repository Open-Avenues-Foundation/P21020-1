const Sequelize = require('sequelize')
const db = require('../config/database')
const Customer = require('./Customer')

const Message = db.define('message', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: Sequelize.STRING
  }
}, { paranoid: true })


module.exports = Message
