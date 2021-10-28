const models = require('../models')
const { sendSingleTwilioSMS, sendMultipleTwilioSMS } = require('../utilities/send-sms')

// Get all Cusotmers
const getCustomers = async () => {
  return await models.Customer.findAll()
}

// Delete Customer(s)
const deleteCustomers = async (customers) => {

  const customerIds = customers.map(customer => customer.id)

  return await models.Customer.destroy({
    where: {
      id: customerIds
    }
  })
}


module.exports = { getCustomers, deleteCustomers }