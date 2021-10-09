const models = require('../models')
const { sendTwilioSMS, sendMultipleTwilioSMS } = require('../utilities/send-sms')

const saveMessage = async (message) => {
  return await models.Message.create({
    text: message,
  })
}


const sendMessage = async (message, customers) => {
  try {
    const { text, id } = message
    const errors = []

    for (const customer of customers) {
      const twilioResult = await sendMultipleTwilioSMS([customer], text)
      if (twilioResult[0].status === 'rejected') {
        customer.errorMsg = twilioResult[0].reason
        errors.push(customer)
      }
      await models.customerMessage.create({
        customerId: customer.id,
        messageId: id,
        dateSent: new Date(Date.now()).toISOString()
      })
    }

    return {
      message: `Text sent to customers`,
      errors: errors,
      status: 200,
    }

  } catch (error) {
    return {
      error: true,
      message: error.message,
      status: 404
    }
  }
}


module.exports = { saveMessage, sendMessage }