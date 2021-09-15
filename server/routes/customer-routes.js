const express = require('express')
const router = express.Router()
const { getCustomers, sendMessage } = require('../controllers/customers/customer-controller')

router.get('/', async (req, res) => {
  getCustomers()
    .then(customers => {
      return res.send(customers)
    })
    .catch(err => {
      return res.status(400).send(err.message)
    })

});


router.post('/message/:id', async (req, res) => {
  const { id } = req.params
  const { message } = req.body

  if (!message) {
    return res.status(404).send('Please provide a message to send')
  }

  const results = await sendMessage(id, message)

  return res.status(results.status).send(results.message)
  // .then(customer => {
  //   // return res.status(200).send(`'${message}' sent to: ${customer.firstName} ${customer.lastName}`)
  //   console.log('SUCCES IN ROUTE FILE')
  //   console.log(customer)
  // })
  // .catch(err => {
  //   // return res.status(500).send(err.message)
  //   console.log('ERROR IN ROUTE FILE')
  //   console.log(err)
  // })
})

module.exports = router;