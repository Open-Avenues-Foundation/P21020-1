require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSingleTwilioSMS = async (customerPhone, message) => {
  return await client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: `+${customerPhone}`
  })
}

const sendMultipleTwilioSMS = async (customers, message) => {
  return await Promise.allSettled(customers.map(async (customer) => {
    return await client.messages.create({
      body: message,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: `+${customer.customerPhone}`
    })
  }))
}



module.exports = { sendSingleTwilioSMS, sendMultipleTwilioSMS }