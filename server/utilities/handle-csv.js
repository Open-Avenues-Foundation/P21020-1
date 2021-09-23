const models = require('../models')
const fs = require('fs')
const csv = require('fast-csv')

function CsvException(message) {
  this.message = message;
  this.status = 400
}

const handleCSV = async (path, filename) => {
  const parsingPromise = new Promise((resolve, reject) => {
    let customers = []

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: ['email', 'firstName', 'lastName', 'phone', 'city', 'state', 'lastOrderPrice', 'lastOrderDate'], renameHeaders: true }))
      .on('error', (error) => { throw error.message })
      .on('data', (row) => { customers.push(row) })
      .on('end', async () => {
        try {
          if (customers.length === 0) throw new CsvException('Please upload CSV File with correct format')
          const bulkCreateResults = await models.Customer.bulkCreate(customers, { validate: true })
          resolve({
            message: 'File succesfully uploaded - ' + filename,
            status: 200
          })
        } catch (error) {
          reject({
            error: true,
            message: error.message || error,
            status: error.status || 500
          })
        }
      })
  })
  return parsingPromise
}

module.exports = handleCSV