const express = require('express')
const router = express.Router()
const models = require('../models')
const { getCustomers } = require('../controllers/customer-controller')

// Get All Customers
router.get('/', async (req, res) => {

  try {
    const allCustomers = await getCustomers()
    return res.send(allCustomers)
  } catch (error) {
    return res.status(400).send('Cannot find customers!')
  }

});


module.exports = router;