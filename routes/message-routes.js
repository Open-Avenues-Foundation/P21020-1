const express = require('express')
const router = express.Router()
const { saveMessage, sendMessage } = require('../controllers/message-controller')


router.post('/', async (req, res) => {
  const { message, selectedCustomers } = req.body

  if (!message) return res.status(404).send('Please provide a message and message recipients')

  const newMessage = await saveMessage(message)
  const results = await sendMessage(newMessage, selectedCustomers)

  res.status(results.status).send(results.message)

})


module.exports = router;