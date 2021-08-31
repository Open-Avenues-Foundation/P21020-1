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
}, {
  hooks: {
    beforeBulkCreate: (customers, options) => {
      for (const customer of customers) {
        console.log('HELLO')
      }
    },
    afterBulkCreate: () => {
      console.log('afterBulkCreate')
    }
  }
});


module.exports = Customer

