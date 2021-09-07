const models = require('../../models')

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
  const { id } = req.params
  const customer = await models.Customer.findOne({ where: { id } })

  console.log(req.body)

  if (customer && req.body.message) {
    const newMessage = await models.Message.create({
      text: req.body.message,
      customerId: id,
    })

    return res.status(200).send(newMessage)
  } else {
    res.status(404).send('Customer or message not found')
  }
}


module.exports = { getCustomers, sendMessage }