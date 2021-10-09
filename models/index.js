const Message = require('./Message')
const Customer = require('./Customer')
const customerMessage = require('./customerMessage')

Customer.belongsToMany(Message, { through: customerMessage })
Message.belongsToMany(Customer, { through: customerMessage })

module.exports = { Message, Customer, customerMessage }