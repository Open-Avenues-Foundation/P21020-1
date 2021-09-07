require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendTwilioSMS = async (customerPhone, message) => {
  try {
    const sentMessage = await client.messages.create({
      body: message,
      from: '+12282830492',
      to: `+${customerPhone}`
    })
  } catch (err) {
    console.log(err)
  }
}


module.exports = { sendTwilioSMS }