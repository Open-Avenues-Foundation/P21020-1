const models = require('../../models')
const { sendTwilioSMS } = require('../../utilities/send-sms')

// Get all Cusotmers
const getCustomers = (req, res) => {
  models.Customer.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send(err.message || "Some error occured while retrieving customers")
    })
}

// Send Message
const sendMessage = async (req, res) => {
  try {
    const { id } = req.params
    const { message } = req.body
    const customer = await models.Customer.findOne({ where: { id } })

    if (!customer || !message) {
      res.status(404).send('Customer not found OR Message not provided')
    }

    // Save message to messages table
    const newMessage = await models.Message.create({
      text: message,
      customerId: id,
      dateSent: new Date(Date.now()).toISOString(),
      sent: 1
    })

    // Call Twilio API
    sendTwilioSMS(customer.phone, message)

    return res.status(200).send(`'${message}' sent to: ${customer.firstName} ${customer.lastName}`)

  } catch (err) {
    console.log(err)
    return res.status(500).send('Server Error')
  }
}


module.exports = { getCustomers, sendMessage }