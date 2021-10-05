const models = require('../models')
const { sendMultipleTwilioSMS } = require('../utilities/send-sms')

const saveMessage = async (message) => {
  return await models.Message.create({
    text: message,
  })
}


const sendMessage = async (message, customers) => {
  try {
    const { text, id } = message

    for (const customer of customers) {
      await sendMultipleTwilioSMS([customer], text)
      await models.customerMessage.create({
        customerId: customer.id,
        messageId: id,
        dateSent: new Date(Date.now()).toISOString()
      })
    }

    return {
      message: `Text sent to all customers`,
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