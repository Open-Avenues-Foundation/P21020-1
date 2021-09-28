require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// const service = client.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

const sendSingleTwilioSMS = async (customerPhone, message) => {
  return await client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: `+${customerPhone}`
  })
}

const sendMultipleTwilioSMS = async (customers, message) => {
  return await Promise.all(customers.map(async (customer) => {
    return await client.messages.create({
      body: message,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: `+${customer.phone}`
    })
  }))
}



module.exports = { sendSingleTwilioSMS, sendMultipleTwilioSMS }