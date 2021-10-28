require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Send a message to multiple customers using Twilio Messaging Service 
const sendMultipleTwilioSMS = async (customers, message) => {
  return await Promise.allSettled(customers.map(async (customer) => {
    return await client.messages.create({
      body: message,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: `+${customer.phone}`
    })
  }))
}


module.exports = { sendMultipleTwilioSMS }