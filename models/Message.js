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
  },
  customerId: {
    type: Sequelize.INTEGER,
    reference: { model: Customer, key: 'id' }
  },
  sent: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  dateSent: {
    type: Sequelize.DATEONLY,
    allowNull: true
  }
}, { paranoid: true })


module.exports = Message
