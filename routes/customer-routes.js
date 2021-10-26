const express = require('express')
const router = express.Router()
const models = require('../models')
const { getCustomers, deleteCustomers } = require('../controllers/customer-controller')

// Get All Customers
router.get('/', async (req, res) => {

  try {
    const allCustomers = await getCustomers()
    return allCustomers ? res.send(allCustomers) : res.sendStatus(404).send('Cannot find Customers')
  } catch (error) {
    return res.status(500).send('Server Error. Something went wrong')
  }

});

// Delete Customer / Customers
router.delete('/', async (req, res) => {
  const { selectedCustomers } = req.body

  try {
    const result = await deleteCustomers(selectedCustomers)

    return result ? res.status(200).json({ message: "Customer(s) deleted from database" }) : res.status(400).json({ error: 'No customers found to delete' })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }

})


module.exports = router;