const models = require('../../models')
const { sendSingleTwilioSMS, sendMultipleTwilioSMS } = require('../../utilities/send-sms')

// Get all Cusotmers
const getCustomers = async () => {
  return await models.Customer.findAll()
}

// Send Message to Single Customer
const sendMessageToSingleCustomer = async (id, message) => {
  try {
    const customer = await models.Customer.findOne({ where: { id } })
    if (!customer) throw new Error('Customer not found!')

    // Call Twilio API
    await sendSingleTwilioSMS(customer.phone, message)

    // Insert Message to Database
    await models.Message.create({
      text: message,
      customerId: id,
      dateSent: new Date(Date.now()).toISOString(),
      sent: 1
    })

    return {
      customer,
      message: `Text sent to ${customer.firstName} ${customer.lastName}`,
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

// Sned Message to Multiple Customers
const sendMessageToMultipleCustomers = async (message, selectedCustomers) => {
  try {

    // Call Twilio API
    await sendMultipleTwilioSMS(selectedCustomers, message)

    // After Twilio Call, create array that stores objects to be entered into messages table
    const customerMessages = selectedCustomers.map(customer => {
      return {
        text: message,
        customerId: customer.id,
        dateSent: new Date(Date.now()).toISOString(),
        sent: 1
      }
    })

    // Bulk Insert customerMessages array
    await models.Message.bulkCreate(customerMessages)

    return {
      message: `Text sent to all customers`,
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

module.exports = { getCustomers, sendMessageToSingleCustomer, sendMessageToMultipleCustomers }