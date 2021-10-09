require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const service = client.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

// Send a message to single customer (to-number must be verified to not throw error)
const sendSingleTwilioSMS = async (customerPhone, message) => {
  return await client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: `+${customerPhone}`
  })
}

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

const sendTwilioSMS = async (customers, message) => {
  customers.map(async (customer) => {
    client.messages.create({
      body: message,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: `+${customer.phone}`
    })
      .then(messages => {
        return messages
      })
      .catch(err => {
        return err
      })
  })
}

// Send a message to multiple customers using Twilio Notify Service 
const sendMultipleTwilioSMS2 = async (customers, message) => {

  const bindings = customers.map(customer => {
    return JSON.stringify({ binding_type: 'sms', address: customer.phone })
  })

  return await service.notifications.create({
    toBinding: bindings,
    body: message
  })
}



module.exports = { sendSingleTwilioSMS, sendMultipleTwilioSMS, sendMultipleTwilioSMS2, sendTwilioSMS }