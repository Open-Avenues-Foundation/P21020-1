const express = require('express')
const router = express.Router()
const csvController = require('../controllers/customers/csv.customers.js')
const upload = require('../middleware/upload')

let routes = (app) => {
  router.post('/upload', upload.single('file'), csvController.upload);
  router.get('/customers', csvController.getCustomers);

  app.use('/api/csv', router)
}

module.exports = routes;