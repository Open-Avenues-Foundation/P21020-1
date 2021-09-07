const models = require('../../models')

// Get all Cusotmers
const getCustomers = (req, res) => {
  models.Customer.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send(err.message || "Some error occured while retrieving customers")
    })
}


module.exports = { getCustomers }