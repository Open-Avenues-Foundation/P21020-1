const models = require('../models')
const { sendSingleTwilioSMS, sendMultipleTwilioSMS } = require('../utilities/send-sms')

// Get all Cusotmers
const getCustomers = async () => {
  return await models.Customer.findAll()
}


module.exports = { getCustomers }