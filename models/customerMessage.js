const Sequelize = require('sequelize')
const Customer = require('./Customer')
const Message = require('./Message')
const db = require('../config/database')

const customerMessage = db.define('customerMessage', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  customerId: {
    type: Sequelize.INTEGER,
    references: { model: Customer, key: 'id' }
  },
  messageId: {
    type: Sequelize.INTEGER,
    references: { model: Message, key: 'id' }
  },
  dateSent: {
    type: Sequelize.DATEONLY,
    allowNull: true
  }
}, { paranoid: true })

module.exports = customerMessage