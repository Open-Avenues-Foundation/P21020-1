const express = require('express')
const router = express.Router()
const models = require('../models')
const { getCustomers, sendMessageToSingleCustomer, sendMessageToMultipleCustomers } = require('../controllers/customers/customer-controller')

// Get All Customers
router.get('/', async (req, res) => {

  try {
    const allCustomers = await getCustomers()
    return res.send(allCustomers)
  } catch (error) {
    return res.status(400).send('Cannot find customers!')
  }

});

// Send a Message to all Selected Customers
router.post('/message', async (req, res) => {
  const { message, selectedCustomers } = req.body

  if (!message) return res.status(404).send('Please provide a message to send')

  const results = await sendMessageToMultipleCustomers(message, selectedCustomers)
  res.status(results.status).send(results.message)

})

// Send a Message to A Specific Customer
router.post('/message/:id', async (req, res) => {
  const { id } = req.params
  const { message } = req.body

  if (!message) return res.status(404).send('Please provide a message to send')

  const results = await sendMessageToSingleCustomer(id, message)
  return res.status(results.status).send(results.message)

})



module.exports = router;