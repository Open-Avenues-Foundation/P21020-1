const express = require('express')
const router = express.Router()
const { getCustomers, sendMessage } = require('../controllers/customers/customer-controller')

router.get('/', async (req, res) => {

  try {
    const allCustomers = await getCustomers()
    return res.send(allCustomers)
  } catch (error) {
    return res.status(400).send('Cannot find customers!')
  }

});


router.post('/message/:id', async (req, res) => {
  const { id } = req.params
  const { message } = req.body

  if (!message) return res.status(404).send('Please provide a message to send')

  const results = await sendMessage(id, message)
  return res.status(results.status).send(results.message)

})

module.exports = router;