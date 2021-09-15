const models = require('../../models')
const { sendTwilioSMS } = require('../../utilities/send-sms')

// Get all Cusotmers
const getCustomers = async () => {
  return await models.Customer.findAll()
}

// Send Message
const sendMessage = async (id, message) => {
  try {
    const customer = await models.Customer.findOne({ where: { id } })

    // Save message to messages table
    await models.Message.create({
      text: message,
      customerId: id,
      dateSent: new Date(Date.now()).toISOString(),
      sent: 1
    })

    // Call Twilio API
    sendTwilioSMS(customer.phone, message)

    return {
      customer,
      message: `Text send to ${customer.firstName} ${customer.lastName}`,
      status: 200,
    }

  } catch (error) {
    return {
      error: true,
      message: error,
      status: 500
    }
  }
}


module.exports = { getCustomers, sendMessage }