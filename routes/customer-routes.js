const express = require('express')
const router = express.Router()
const models = require('../models')
const { getCustomers } = require('../controllers/customer-controller')

// Get All Customers
router.get('/', async (req, res) => {

  try {
    const allCustomers = await getCustomers()
    return allCustomers ? res.send(allCustomers) : res.sendStatus(404).send('Cannot find Customers')
  } catch (error) {
    return res.status(500).send('Server Error. Something went wrong')
  }

});


module.exports = router;