const express = require('express')
const router = express.Router()
const { getCustomers, sendMessage } = require('../controllers/customers/customer-controller')

router.get('/', getCustomers);
router.post('/message/:id', sendMessage)

module.exports = router;