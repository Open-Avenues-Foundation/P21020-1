const Message = require('./Message')
const Customer = require('./Customer')

Customer.hasMany(Message)
Message.belongsTo(Customer)

module.exports = { Message, Customer }