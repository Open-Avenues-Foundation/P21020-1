const Message = require('./Message')
const Customer = require('./Customer')
const CustomerMessage = require('./customerMessage')

Customer.belongsToMany(Message, { through: CustomerMessage })
Message.belongsToMany(Customer, { through: CustomerMessage })

module.exports = { Message, Customer, CustomerMessage }