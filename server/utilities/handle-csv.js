const models = require('../models')
const fs = require('fs')
const csv = require('fast-csv')

const handleCSV = (path, req, res) => {
  let customers = []

  fs.createReadStream(path)
    .pipe(csv.parse({ headers: ['email', 'firstName', 'lastName', 'phone', 'city', 'state', 'lastOrderPrice', 'lastOrderDate'], renameHeaders: true }))
    .on('error', (error) => {
      throw error.message
    })
    .on('data', (row) => {
      customers.push(row)
    })
    .on('end', () => {
      models.Customer.bulkCreate(customers)
        .then(() => {
          return res.status(200).send({
            message:
              "Uploaded the file successfully: " + req.file.originalname
          })
        })
        .catch((error) => {
          return res.status(500).send({
            message: "Failed to import data into database!",
            error: error.message
          })
        })
    })
}

module.exports = handleCSV