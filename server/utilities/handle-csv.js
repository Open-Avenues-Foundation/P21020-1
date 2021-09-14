const models = require('../models')
const fs = require('fs')
const csv = require('fast-csv')
const { resolve } = require('path')
const { rejects } = require('assert')

const handleCSV = async (path, filename) => {

  const parsingPromise = new Promise((resolve, reject) => {

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
            resolve({
              status: 200,
              message: "Uploaded the file successfully: " + filename
            })
          })
          .catch((error) => {
            reject({
              error: true,
              message: error,
              status: 500
            })
          })
      })
  })

  return parsingPromise
}

module.exports = handleCSV