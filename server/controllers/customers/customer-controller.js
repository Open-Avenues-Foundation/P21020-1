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
    if (!customer) throw new Error('Cannot send message. Customer not found!')

    // Call Twilio API
    await sendTwilioSMS(customer.phone, message)

    // Insert Message to Database
    await models.Message.create({
      text: message,
      customerId: id,
      dateSent: new Date(Date.now()).toISOString(),
      sent: 1
    })

    return {
      customer,
      message: `Text send to ${customer.firstName} ${customer.lastName}`,
      status: 200,
    }

  } catch (error) {
    return {
      error: true,
      message: `Cannot send text. ${error.message}`,
      status: 404
    }
  }
}

module.exports = { getCustomers, sendMessage }