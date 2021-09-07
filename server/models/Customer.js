const Sequelize = require('sequelize')
const db = require('../config/database')

const Customer = db.define('customer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  lastOrderPrice: {
    type: Sequelize.INTEGER
  },
  lastOrderDate: {
    type: Sequelize.STRING
  }
}, { paranoid: true });

// Model Hooks
Customer.beforeBulkCreate((customers) => {
  for (const customer of customers) {
    customer.sanitizeEmail()
  }
})

// Instance Methods
Customer.prototype.sanitizeEmail = function () {
  this.email = this.email.replace(/[&\/\\#,+()$~%'":*?<>{}\s]/g, '').replace(/\.{2,}/g, '')
}

module.exports = Customer

